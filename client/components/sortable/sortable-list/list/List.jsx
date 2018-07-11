import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import Card from '../../../card';
import ListItem from '../list-item';

const List = SortableContainer(({ items, enableDragHandle }) => {
	return (
		<ul>
			{items.map((item, index) => (
				<ListItem key={`item-${index}`} index={index}>
					<Card title={item.title} content={item.content} enableDragHandle={enableDragHandle} />
				</ListItem>
			))}
		</ul>
	);
});

export default List;