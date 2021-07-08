import React, { useState, useEffect } from 'react';
// import React from 'react';
import * as PropTypes from 'prop-types';
import { tuple } from '../_util/type';

import { IconRadioEmpty, IconRadioOk } from 'icons';

const typeKind = tuple('payment', 'custom');
const secondTypeKind = tuple('offline', 'online');

export interface ListRadioProps {
	list: Array<RadioItemProps>;
	onChange: (res: RadioItemProps) => void;
	selected: string
}

interface RadioItemProps {
	title: string;
	value: string;
	checked: boolean;
}


function Item(props: any) {
	const { data, selected, onSelected } = props;

	return (
		<div
			className="ListRadio"
			onClick={() => {
				onSelected(data)
			}}
		>
			<span className="ListRadio__icon">
				{
					selected === data.value ? <IconRadioOk /> : <IconRadioEmpty />
				}
			</span>
			<span className="ListRadio__content">
				<span className="ListRadio__content-title">{data.title}</span>
			</span>
		</div>
	);
}

function useRadioList(initialValue: any) {
	let [list, setList] = useState(initialValue);
	let updateData = (res: any) => {
		setList(res);
	};
	return { list, updateData };
}

function useRadioData(initialValue: string) {
	let [data, setData] = useState(initialValue);

	let onSelected = (res: any, fn: any) => {
		setData(res.value);
		fn(res);
	};

	let updateData = (res: any) => {
		setData(res);
	}

	return { data, onSelected, updateData };
}


const ListRadio = (props: ListRadioProps) => {
	const { list, onChange, selected } = props;

	const oList = useRadioList(list.slice(0));
	const oData = useRadioData(selected)

	useEffect(() => {
		oList.updateData(list);
	}, [list]);

	useEffect(() => {
		oData.updateData(selected);
	}, [selected]);

	return (
		<div className="am-group">
			{
				list.map((item: RadioItemProps) => {
					return (
						<Item
							key={item.value}
							data={item}
							selected={oData.data}
							onSelected={(res: any) => {
								oData.onSelected(res, onChange)
							}}
						/>
					)
				})
			}
		</div>
	);
};

ListRadio.propTypes = {
	type: PropTypes.oneOf(typeKind),
	secondType: PropTypes.oneOf(secondTypeKind),
	list: PropTypes.array,
};

export default React.memo(ListRadio);
