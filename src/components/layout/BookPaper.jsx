import styled from 'styled-components';

function BookPaper(props) {
    return(
        <Paper style={{ width: props.width, height: props.height, backgroundColor: props.backgroundColor, position: props.position, top: props.top, right: props.right, bottom: props.bottom, left: props.left }}>
            {props.children}
        </Paper>
    );
}

export default BookPaper;

const Paper = styled.div`
    background-color: white;
    display: grid;
    grid-template-rows: 1fr 12fr;
    grid-gap: 6px;
    border-radius: 12px;
    border: 1px solid var(--black);
    padding: 12px 9px;
`;