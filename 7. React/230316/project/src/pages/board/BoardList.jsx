import {Button} from '../../common/button'
import {BoardTable} from '../../common/table'
import {Row} from '../../common/row'
import {Accordion} from '../../common/accordion'

export const BoardList = () => {
    return <>
        
        <Row width="600px" height="auto" align="center">
            <BoardTable/>
        </Row>
        <Button color="green" active>버튼입니다!</Button>

        <Accordion title={"title~?"}>
            <ul>
                <li>a</li>
                <li>b</li>
                <li>c</li>
            </ul>
        </Accordion>
    </>
}