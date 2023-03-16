import styled from 'styled-components'
import {useState, useRef, useEffect} from 'react'

const AccordionWrapper = styled.div`
    width:100%;
    border: 1px solid #ccc;
    border-radius:5px;
    margin-bottom:20px;
`

const AccordionHeader = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background: #f0f0f0;
    
    &:hover {
        background:#e0e0e0;
    }
`

const AccordionIcon = styled.div`
    font-size: 16px;
    transform: ${props => props.expanded ? 'rotate(180deg)' : 'rotate(0deg)'};
    transition:transform 0.2s ease-in-out;
`

const AccordionContent = styled.div`
    max-height: ${ props => props.expanded ? `${props.contentHeight}px` : '0px' };
    overflow:hidden;
    transition: max-height 0.2s ease-in-out;
`

export const Accordion = ({title, children}) => {
    const [expanded, setExpanded] = useState(false)
    const [contentHeight, setContentHeight] = useState(0)
    const contentRef = useRef(null)

    const init = () => {
        if(!contentRef) return
        setContentHeight(contentRef.current.scrollHeight)
    }

    useEffect(()=>{
        init()
    },[expanded])

    return (
        <AccordionWrapper>
            <AccordionHeader onClick={()=> setExpanded((state)=>!state)}>
                <span>{title}</span> 
                <AccordionIcon expanded={expanded}>▲</AccordionIcon>
            </AccordionHeader>
            <AccordionContent expanded={expanded} contentHeight={contentHeight} ref={contentRef}>
                {children}
            </AccordionContent>
        </AccordionWrapper>
    )
}