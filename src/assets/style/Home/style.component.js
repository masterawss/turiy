import styled from 'styled-components'

export const ImageMarker = styled.img`
    border-radius: 51% 49% 49% 51% / 35% 36% 64% 65%;
    width: 60px;
    height: 60px;
    margin-left: -30px;
    margin-top: -30px;
    filter: ${props => props.isVisited ? 'grayscale(1)' : 'grayscal(0)'}
`