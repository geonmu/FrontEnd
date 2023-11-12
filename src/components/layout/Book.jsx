import styled from 'styled-components';

function Book(props) {
    return(
        <BookCover style={{width: props.width, height: props.height, margin: props.margin}}>
            <BookDot style={{display: props.display, gridTemplateColumns: props.gridTemplateColumns, gridTemplateRows: props.gridTemplateRows}}>
                {props.children}
            </BookDot>
        </BookCover>
    );
}

export default Book;

const BookCover = styled.div`
    background-color: var(--sky-blue);

    border-radius: 12px;
    border: 2px solid var(--black);
    box-shadow: 5px 5px 5px rgb(0, 0, 0, 0.3);

    position: relative;
`;

const BookDot = styled.div`
    border: 3px dashed var(--light-sky-blue);
    border-radius: 12px;

    position: absolute;
    
    top: 25px;
    bottom: 25px;
    left: 25px;
    right: 25px;

    padding: 4px 2px;
`;