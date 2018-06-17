import React from 'react';

import Book from '../Book/Book';

const Shelf = () => {
	return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">Currently Reading</h2>
			<div className="bookshelf-books">
				<ol className="books-grid">
					<Book />
				</ol>
			</div>
		</div>
	);
};

export default Shelf;