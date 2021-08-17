import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';


const Contain = ({children, checkContain}) => {

    const ref = useRef()

    useEffect(() => {
        const handler = (e) => {
            if(ref.current) {
                const isContain = ref.current.contains(e.target)
                if(!isContain) {
                    checkContain()
                }
            }
        }
        document.addEventListener('click', handler)

        return () => {
            document.removeEventListener('click', handler)
        }
    }, [])

    return (
        <Container ref={ref}>
            {children}
        </Container>
    )
}

const Container = styled.div`

`;
export default Contain;