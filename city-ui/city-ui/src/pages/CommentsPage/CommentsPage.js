import {useState} from "react";
import {
    CircularProgress,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";


const useStyle = makeStyles({
    table: {
        minWidth: 150,
    }
})
const CommentsPage = () => {

    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true)
    //
    // useEffect(() => {
    //     // componentDidMount && componentDidUpdate
    //     fetchComments()
    //         .then(({data}) => {
    //             setComments(data)
    //         }).finally(() => setLoading(false))
    // }, [])

    const classes = useStyle()

    return (
        <Container maxWidth="md">
            <TableContainer component={Paper} className={classes.table}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Comments</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {loading ?
                            <TableRow>
                                <TableCell colSpan={2} align="center">
                                    <CircularProgress/>
                                </TableCell>
                            </TableRow> :
                            comments.map(comment => (
                                <TableRow key={comment.id}>
                                    <TableCell align="left" component="th" scope="row">
                                        {comment.content}
                                    </TableCell>
                                    <TableCell align="right">
                                        <Button variant="outlined" color="primary">Delete</Button>
                                        <Button variant="outlined" color="primary">Change</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default CommentsPage
