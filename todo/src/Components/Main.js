import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const Main = () => {
    return (
        <div>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Add a task..."
                    aria-label="Add a task..."
                    aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                    Submit
                </Button>
            </InputGroup>
        </div>
    );
};

export default Main;