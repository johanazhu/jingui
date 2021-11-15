export interface RecordListProps {
    leftTopText: string;
    leftBottomText: string;
    rightTopText?: string;
    rightBottomText?: string;
    actionNode?: any;
    link?: boolean;
    colWidth: number;
    rightTopClassName?: string;
    rightBottomClassName?: string;
    onClick?: () => void;
}
