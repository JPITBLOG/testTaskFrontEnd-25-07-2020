import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Search = (props) => {
    const {onSetState , setDateChangeStart, setDateChangeEnd, dobFrom, dobTo, onSearch} = props;
    return (
        <div>
            <Form>
                <Row form>
                    <Col md={2}>
                        <FormGroup>
                            <Label for="dob">Search</Label>
                            <Input
                                type="text"
                                name="search"
                                id="search"
                                placeholder="search"
                                onChange = {(event) => onSetState(event, 'search')}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Label for="dob">From</Label>
                            <DatePicker selected={dobFrom} onChange={date => setDateChangeStart(date)} />
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Label for="dob">TO</Label>
                            <DatePicker selected={dobTo} onChange={date => setDateChangeEnd(date)} />
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Label for="gender">Gender</Label>
                            <Input
                                type="select"
                                name="select"
                                id="exampleSelect"
                                onChange = {(event) => onSetState(event, 'gender')}
                            >
                                <option value={'SELECT'}>SELECT</option>
                                <option value={'male'}>MALE</option>
                                <option value={'female'}>FEMALE</option>
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                         <Button onClick={() => onSearch()}>Search</Button>
                        </FormGroup>
                    </Col>
                </Row>

            </Form>
        </div>
    )
}

export default Search;