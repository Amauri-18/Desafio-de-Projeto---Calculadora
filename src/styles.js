
import styled from 'styled-components';

export const Container = styled.div `
   
    width: 100%;
    height: 100vh;
    background-color: #CACACA;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`

    background-color: #FFF;
    max-width: 500px;
`

export const Row = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    aligh-items: center;
    margin: 1px;
`

export const Column = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    aligh-items: center;
    border: 1px solid red;
`
