import React, {Component} from "react";
import * as studentService from '../../service/getStudent';
import * as paginationService from '../../service/pageInfo';
import StudentTable from './studentTable';
import Page from './pagination';
import Search from './searchBar';
class StudentGrid extends Component {
    constructor(props){
        super(props);
        this.state = {
            paginationRecord: {
                firstPage: 0,
                lastPage: 0,
                currentPage: 0,
                nextPage: 0,
                prevPage: 0,
                totalPages: 0,
                studentLength: 0
            },
            search: '',
            dobFrom: '',
            dobTo: '',
            gender: '',
            studentData : [],
            isLoading: true,
            error: ''
        }
        this.clickOnChangePage = this.clickOnChangePage.bind(this);
        this.onSetState = this.onSetState.bind(this);
    }

    onSearch = () => {
        let {
            search,
            dobFrom,
            dobTo,
            gender,
        } = this.state;

        let dateFrom = new Date(dobFrom);
        dateFrom = dateFrom.getFullYear()+'-' + (dateFrom.getMonth()+1) + '-'+dateFrom.getDate();

        let dateTo = new Date(dobTo);
        dateTo = dateTo.getFullYear()+'-' + (dateTo.getMonth()+1) + '-'+dateTo.getDate();
        /*searching data*/

    }

    onSetState = (event, stateName) => {
        this.setState({[stateName]: event.target.value})
    }

    setDateChangeStart = (date) => {

        this.setState({dobFrom: date});
    }

    setDateChangeEnd = (date) => {

        this.setState({dobTo: date});
    }

    clickOnChangePage = (pageIndex) => {
        this.getStudentData(pageIndex);
    }

    getPagination = () => {

        paginationService.getPageInfo()
            .then((response) => {

                if (response.status === 200) {
                    let {paginationRecord} = response.data;
                    if (paginationRecord.studentLength) {
                        this.setState({paginationRecord: response.data.paginationRecord});
                        this.getStudentData(paginationRecord.currentPage);
                    }
                    else this.setState({isLoading: false});
                }
            });
    }

    getStudentData = (currentPage) => {

        studentService.getStudent(currentPage)
            .then((response) => {

                if (response.status === 200) {

                        let paginationRecord = response.data.paginationRecord;
                        paginationRecord = {...this.state.paginationRecord,...paginationRecord}

                        this.setState({
                            studentData: response.data.student ,
                            isLoading: false,
                            paginationRecord: paginationRecord
                        });
                }
            }).catch((error)=> {
                this.setState({error: 'there is an error while fetching data'});
        });
    }

    componentDidMount() {
        this.getPagination();
    }


    render() {

        const {studentData, isLoading, error, paginationRecord, search, dobFrom, dobTo} = this.state;

        return isLoading ? (
            <div>
                {'Data is Loading'}
            </div>
        ) :
            error ? (
                <div>{error}</div>
            ) :
            (
                <div>
                    <Search
                        onSearch = {this.onSearch}
                        onSetState = {(event, name) => this.onSetState(event, name)}
                        setDateChangeStart = {date => this.setDateChangeStart(date)}
                        setDateChangeEnd = {date => this.setDateChangeEnd(date)}
                        search = {search}
                        dobFrom = {dobFrom}
                        dobTo = {dobTo}
                    />
                    <StudentTable
                        studentData = {studentData}
                    />
                    <Page
                        paginationRecord = {paginationRecord}
                        clickOnChangePage = {this.clickOnChangePage}
                    />
                </div>
            )
    }
}

export default StudentGrid;