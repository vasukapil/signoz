import { themeColors } from 'constants/theme';
import styled from 'styled-components';

interface TableHeaderCellStyledProps {
	isDragColumn: boolean;
}

export const TableStyled = styled.table`
	width: 100%;
	border-top: 1px solid rgba(253, 253, 253, 0.12);
	border-radius: 2px 2px 0 0;
	border-collapse: separate;
	border-spacing: 0;
	border-inline-start: 1px solid rgba(253, 253, 253, 0.12);
	border-inline-end: 1px solid rgba(253, 253, 253, 0.12);
`;

export const TableCellStyled = styled.td`
	padding: 0.5rem;
	border-inline-end: 1px solid rgba(253, 253, 253, 0.12);
	border-top: 1px solid rgba(253, 253, 253, 0.12);
	background-color: ${themeColors.lightBlack};
`;

export const TableRowStyled = styled.tr<{
	$isDarkMode: boolean;
	$isActiveLog: boolean;
}>`
	td {
		${({ $isDarkMode, $isActiveLog }): string =>
			$isActiveLog
				? `background-color: ${
						$isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0, 0, 0, 0.1)'
				  };`
				: ''}
	}

	&:hover {
		${TableCellStyled} {
			background-color: #1d1d1d;
		}
	}
`;

export const TableHeaderCellStyled = styled.th<TableHeaderCellStyledProps>`
	padding: 0.5rem;
	border-inline-end: 1px solid rgba(253, 253, 253, 0.12);
	background-color: #1d1d1d;
	${({ isDragColumn }): string => (isDragColumn ? 'cursor: col-resize;' : '')}

	&:first-child {
		border-start-start-radius: 2px;
	}
	&:last-child {
		border-start-end-radius: 2px;
		border-inline-end: none;
	}
`;
