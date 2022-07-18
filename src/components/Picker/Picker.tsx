import React, {
    useState,
    useEffect,
    useRef,
    memo,
    useMemo,
    forwardRef,
    useImperativeHandle,
} from 'react';
import classnames from 'classnames';
import { PickerProps, PickerObjectColumn } from './PropType';
import { useRefs, useEventListener } from '../hooks';
import { preventDefault } from '@/utils';

import Loading from '../Loading';
import Column from './PickerColumn';

const prefixCls = 'jing-picker';

const Picker = forwardRef<{}, PickerProps>((props, ref) => {
    const {
        className,
        columns,
        defaultIndex = 0,
        title,
        confirmButtonText,
        cancelButtonText,
        loading,
        showToolbar,
        itemHeight = 44,
        visibleItemCount = 6,
        swipeDuration = 1000,
        onConfirm,
        onCancel,
        onChange,
    } = props;

    const classes = classnames(className, prefixCls);

    const titleClass = classnames(`${prefixCls}__title`, 'jing-ellipsis');

    const [formattedColumns, setFormattedColumns] = useState<any>([]);

    const [refs, setRefs, resetRefs] = useRefs();

    const columnsRef = useRef<HTMLDivElement>(null);
    // const columnRef = useRef<any>([]);
    // const formattedColumns = useRef<PickerObjectColumn[]>([])

    useEffect(() => {
        if (JSON.stringify(columns) !== JSON.stringify(formattedColumns)) {
            resetRefs?.();
            format();
        }
    }, [columns]);

    const dataType = useMemo(() => {
        const firstColumn = columns[0] || {};
        if (typeof firstColumn === 'object') {
            // @ts-ignore
            if (firstColumn.children) {
                return 'cascade';
            }

            if (firstColumn.values) {
                return 'object';
            }
        }
        return 'plain';
    }, [columns]);

    const format = () => {
        if (dataType === 'plain') {
            setFormattedColumns([
                {
                    text: 'text',
                    values: columns,
                    // children: 'children',
                },
            ]);
        } else if (dataType === 'cascade') {
            formatCascade();
        } else {
            setFormattedColumns(columns);
        }
    };

    const formatCascade = () => {
        const formatted: PickerObjectColumn[] = [];

        let cursor: PickerObjectColumn = {
            children: columns,
        };

        while (cursor && cursor.children) {
            const children = cursor.children;
            let defaultIndexCursor = cursor.defaultIndex ?? +defaultIndex;

            while (
                children[defaultIndexCursor] &&
                children[defaultIndexCursor].disabled
            ) {
                if (defaultIndexCursor < children.length - 1) {
                    defaultIndexCursor++;
                } else {
                    defaultIndexCursor = 0;
                    break;
                }
            }

            formatted.push({
                // @ts-ignore
                values: cursor.children,
                className: cursor.className,
                defaultIndex,
            });

            cursor = children[defaultIndexCursor];
        }

        setFormattedColumns(formatted);
    };

    const handleAction = (event: any) => {
        if (dataType === 'plain') {
            event(getColumnValue(0), getColumnIndex(0));
        } else {
            event(getValues(), getIndexes());
        }
    };

    // const getChild = (index: number) => columnRef.current[index];
    const getChild = (index: number) => refs[index];

    const getColumnValue = (index: number) => {
        const column = getChild(index);
        return column?.getValue();
    };

    const getColumnIndex = (index: number) => {
        const column = getChild(index);
        return column?.state.index;
    };

    const setColumnIndex = (columnIndex: number, optionIndex: number) => {
        const column = getChild(columnIndex);

        if (column) {
            column.setIndex(optionIndex);
            if (dataType === 'cascade') {
                onCascadeChange(columnIndex);
            }
        }
    };

    const getValues = () => refs.map((_ref: any) => _ref.getValue());

    const setValues = (values: string[]) => {
        values.forEach((value, index) => {
            setColumnValues(index, value);
        });
    };

    const getIndexes = () => refs.map((_ref: any) => _ref.state.index);

    const setIndexes = (indexes: []) => {
        indexes.forEach((optionIndex, columnIndex) => {
            setColumnIndex(columnIndex, optionIndex);
        });
    };

    const onHandleCancel = () => {
        console.log('取消');
        onCancel && handleAction(onCancel);
    };

    const onHandleConfirm = () => {
        console.log('确认');
        refs.forEach((_ref: any) => _ref.stopMomentum());
        onConfirm && handleAction(onConfirm);
    };

    const onHandleChange = async (columnIndex: number) => {
        // console.log('选中', columnIndex)

        if (dataType === 'cascade') {
            await onCascadeChange(columnIndex);
        }

        if (dataType === 'plain') {
            onChange?.(getColumnValue(0), getColumnIndex(0));
        } else {
            onChange?.(getValues(), columnIndex);
        }
    };

    const onCascadeChange = async (columnIndex: number) => {
        return new Promise((resolve) => {
            let cursor: PickerObjectColumn = { children: columns };
            const indexes = getIndexes();

            for (let i = 0; i <= columnIndex; i += 1) {
                // @ts-ignore
                cursor = cursor.children[indexes[i]];
            }

            while (cursor && cursor.children) {
                columnIndex += 1;
                setColumnValues(columnIndex, cursor.children);
                cursor = cursor.children?.[cursor.defaultIndex || 0];
            }

            resolve(true);
        });
    };

    const setColumnValues = (index: number, options: any) => {
        // const column = columnRef.current[index]
        const column = refs[index];
        if (column) {
            column.setOptions(options);
        }
    };

    const setColumnValue = (index: number, value: string) => {
        const column = getChild(index);
        if (column) {
            column.setValue(value);

            if (dataType === 'cascade') {
                onCascadeChange(index);
            }
        }
    };

    const getColumnValues = (index: number) => {
        const column = getChild(index);
        return column?.getValue();
    };

    useEventListener('touchmove', preventDefault, {
        target: columnsRef.current,
    });

    useImperativeHandle(ref, () => ({
        confirm,
        getValues,
        setValues,
        getIndexes,
        setIndexes,
        getColumnIndex,
        setColumnIndex,
        getColumnValue,
        setColumnValue,
        getColumnValues,
        setColumnValues,
    }));

    const renderToolbar = () => (
        <div className={`${prefixCls}__toolbar`}>
            <button className={`${prefixCls}__cancel`} onClick={onHandleCancel}>
                {cancelButtonText}
            </button>
            <div className={titleClass}>{title}</div>
            <button
                className={`${prefixCls}__confirm`}
                onClick={onHandleConfirm}
            >
                {confirmButtonText}
            </button>
        </div>
    );

    const renderColumnItems = () => {
        // console.log('formattedColumns.current', formattedColumns)

        return (
            <>
                {formattedColumns.map((item: any, columnIndex: number) => {
                    // console.log('item', item)
                    // console.log('columnIndex', columnIndex)
                    return (
                        <Column
                            key={columnIndex}
                            // ref={(el) => (columnRef.current[columnIndex] = el)}
                            ref={setRefs(columnIndex)}
                            valueKey={item.text || 'text'}
                            className={item.className}
                            itemHeight={itemHeight}
                            defaultIndex={item.defaultIndex ?? +defaultIndex}
                            swipeDuration={swipeDuration}
                            visibleItemCount={visibleItemCount}
                            initialOptions={item.values}
                            onChange={() => {
                                onHandleChange(columnIndex);
                            }}
                        />
                    );
                })}
            </>
        );
    };

    const renderColumns = () => {
        const wrapHeight = itemHeight * +visibleItemCount;
        const columnsStyle = { height: `${wrapHeight}px` };
        const frameStyle = { height: `${itemHeight}px` };
        const maskStyle = {
            backgroundSize: `100% ${(wrapHeight - itemHeight) / 2}px`,
        };
        const frameClass = classnames(
            `${prefixCls}__frame`,
            `jing-hairline-unset--top-bottom`,
        );

        return (
            <div
                className={`${prefixCls}__columns`}
                ref={columnsRef}
                style={columnsStyle}
            >
                {/* // onTouchMove={preventDefault}> */}
                {renderColumnItems()}
                <div className={`${prefixCls}__mask`} style={maskStyle} />
                <div className={frameClass} style={frameStyle} />
            </div>
        );
    };

    return (
        <div className={classes}>
            {showToolbar && renderToolbar()}
            {loading && <Loading className={`${prefixCls}__loading`} />}
            {renderColumns()}
        </div>
    );
});

Picker.defaultProps = {
    columns: [],
    defaultIndex: 0,
    title: '标题',
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    loading: false,
    showToolbar: true,
    itemHeight: 44,
    visibleItemCount: 6,
    swipeDuration: 1000,
};

export default memo(Picker);
