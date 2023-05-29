import React, { Component } from 'react';
import { Col, Form, Modal, Row, OverlayTrigger, Tooltip, Button } from 'react-bootstrap';
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};
type State = {
    selectedConnectionType: string;
    selectedConnectionDbType: string;
    isRegBasedDriverConfig: boolean;
    isRegBasedUrlConfig: boolean;
    isRegBasedUserConfig: boolean;
    isRegBasedPassConfig: boolean;
    selectedConnectionDsType: string;
    selectedProAutocommit: string;
    selectedProIsolation: string;
    selectedProPoolstatements: string;
    selectedProTestonborrow: string;
    selectedProTestwhileidle: string;
};

export default class DBReportMediatorProperty extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
        selectedConnectionType: "DB_CONNECTION",
        selectedConnectionDbType: "OTHER",
        isRegBasedDriverConfig: false,
        isRegBasedUrlConfig: false,
        isRegBasedUserConfig: false,
        isRegBasedPassConfig: false,
        selectedConnectionDsType: "EXTERNAL",
        selectedProAutocommit: "DEFAULT",
        selectedProIsolation: "Action1",
        selectedProPoolstatements: "DEFAULT",
        selectedProTestonborrow: "DEFAULT",
        selectedProTestwhileidle: "DEFAULT",
    };
}

handleConnectionTypeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedConnectionType: event.target.value });
};
handleConnectionDbTypeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedConnectionDbType: event.target.value });
};
//DB_CONNECTION "Is Registry Based Driver Config" checkbox 
handleRegBDriConfigCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ isRegBasedDriverConfig: event.target.checked });
};
//DB_CONNECTION "Connection Db Driver" default value change by Connection Db Type selection 
handleConnectionDbDriverChange = (event: React.ChangeEvent<HTMLInputElement>) => {};


//DB_CONNECTION "Is Registry Based Url Config" checkbox
handleRegBUrlConfigCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ isRegBasedUrlConfig: event.target.checked });
};
//DB_CONNECTION "Connection Db Url" default value change by Connection Db Type selection 
handleConnectionUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {};


//DB_CONNECTION "Is Registry Based User Config" checkbox
handleRegBUserConfigCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ isRegBasedUserConfig: event.target.checked });
};
//DB_CONNECTION "Connection Db Username" default value change by Connection Db Type selection 
handleConnectionUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {};


//DB_CONNECTION "Is Registry Based Password Config" checkbox
handleRegBPassConfigCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ isRegBasedPassConfig: event.target.checked });
};
handleConnectionDsTypeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedConnectionDsType: event.target.value });
};
handleProAutocommitSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedProAutocommit: event.target.value });
};
handleProIsolationSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedProIsolation: event.target.value });
};
handleProPoolstatementsSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedProPoolstatements: event.target.value });
};
handleProTestonborrowSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedProTestonborrow: event.target.value });
};
handleProTestwhileidleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedProTestwhileidle: event.target.value });
};

    render() {
        const { selectedConnectionType, selectedConnectionDbType ,isRegBasedDriverConfig, isRegBasedUrlConfig, isRegBasedUserConfig, isRegBasedPassConfig, selectedConnectionDsType, selectedProAutocommit, selectedProIsolation, selectedProPoolstatements, selectedProTestonborrow, selectedProTestwhileidle } = this.state;

        return (
            <>
                <Modal.Header>
                    <Modal.Title className='text-primary'>DB Report Mediator Property</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <br />
                    <Row className='mb-4'>
                        <Modal.Title className='text-secondary'>
                            Connection
                        </Modal.Title>
                        <Form>
                            <Form.Group>
                                <Form.Label className="ConnectionType">ConnectionType</Form.Label>
                                <Form.Select value={selectedConnectionType} onChange={this.handleConnectionTypeSelectChange}>
                                <option value="DB_CONNECTION">DB_CONNECTION</option>
                                <option value="DATA_SOURCE">DATA_SOURCE</option>
                                </Form.Select>
                                {selectedConnectionType === "DB_CONNECTION" && (
                                <>
                                    <Form.Label className="DatabaseConfiguration">Database Configuration</Form.Label>
                                    <Form.Control type="text" placeholder="eg: Database Configuration" />
                                    <Form.Label className="ConnectionDbType">Connection Db Type</Form.Label>
                                    <Form.Select value={selectedConnectionDbType} onChange={this.handleConnectionDbTypeSelectChange}>
                                        <option value="OTHER">OTHER</option>
                                        <option value="MYSQL">MYSQL</option>
                                        <option value="ORACLE">ORACLE</option>
                                        <option value="MSSQL">MSSQL</option>
                                        <option value="POSTGRESQL">POSTGRESQL</option>
                                    </Form.Select>
                                    <br />
                                    <Form.Check type="checkbox" className="RegBasedDriverConfig" style={{ display: "flex", alignItems: "center" }} label={<span style={{ marginLeft: "10px" }}>Is Registry Based Driver Config</span>} onChange={this.handleRegBDriConfigCheckboxChange} />
                                    {isRegBasedDriverConfig ? (
                                        <>
                                            <Form.Label className="RegBDriConfigKey">Registry Based Driver Config Key</Form.Label>
                                            {/* When a user clicks this textbox, the Resource KeyModel appears.*/}
                                            <Form.Control type="text" readOnly />
                                        </>
                                    ) : (
                                        <> 
                                            <Form.Label className="ConnectionDbDriver">Connection Db Driver</Form.Label>
                                            <Form.Control type="text" placeholder={
                                                selectedConnectionDbType === "MYSQL"
                                                ? "com.mysql.jdbc.Driver"
                                                : selectedConnectionDbType === "ORACLE"
                                                ? "oracle.jdbc.driver.OracleDriver"
                                                :  selectedConnectionDbType === "MSSQL"
                                                ? "com.microsoft.sqlserver.jdbc.SQLServerDriver"
                                                : selectedConnectionDbType === "POSTGRESQL"
                                                ? "jdbc:postgresql://localhost:5432/<dbName>"
                                                : "eg: Connection Db Driver"
                                            } onChange={this.handleConnectionDbDriverChange} />
                                        </>
                                    )}
                                </>
                                )}
                                {selectedConnectionType === "DATA_SOURCE" && (
                                    <>
                                        <Form.Label className="ConnectionDsType">Connection Ds Type</Form.Label>
                                        <Form.Select value={selectedConnectionDsType} onChange={this.handleConnectionDsTypeSelectChange}>
                                            <option value="EXTERNAL">EXTERNAL</option>
                                            <option value="CARBON">CARBON</option>
                                        </Form.Select>
                                        <Form.Label className="ConnectionDsName">Connection Ds Name</Form.Label>
                                        <Form.Control type="text" placeholder="eg: Connection Ds Name" />
                                        {selectedConnectionDsType === "EXTERNAL" && (
                                            <>
                                                <Form.Label className="ConnectionDsInitialContext">Connection Ds Initial Context</Form.Label>
                                                <Form.Control type="text" placeholder="eg: Connection Ds Initial Context" />
                                            </>
                                        )}
                                    </>
                                )}
                                { (selectedConnectionDsType !== "CARBON" || selectedConnectionType === "DB_CONNECTION") && (
                                    <>
                                        <br />
                                        <Form.Check type="checkbox" className="RegBasedUrlConfig" style={{ display: "flex", alignItems: "center" }} label={<span style={{ marginLeft: "10px" }}>Is Registry Based Url Config</span>} onChange={this.handleRegBUrlConfigCheckboxChange} />
                                        {isRegBasedUrlConfig ? (
                                        <>
                                            <Form.Label className="RegBUrlConfigKey">Registry Based Url Config Key</Form.Label>
                                            {/* When a user clicks this textbox, the Resource KeyModel appears.*/}
                                            <Form.Control type="text" readOnly />
                                        </>
                                        ) : (
                                        <>
                                            <Form.Label className="ConnectionURL">Connection URL</Form.Label>
                                            <Form.Control type="text" placeholder={
                                                (selectedConnectionType === "DB_CONNECTION" && selectedConnectionDbType === "MYSQL")
                                                ? "jdbc:mysql://localhost:3306/<dbName>"
                                                : (selectedConnectionType === "DB_CONNECTION" && selectedConnectionDbType === "ORACLE")
                                                ? "jdbc:oracle:thin:@SERVER_NAME:PORT/SID"
                                                : (selectedConnectionType === "DB_CONNECTION" && selectedConnectionDbType === "MSSQL")
                                                ? "jdbc:sqlserver://<IP>:1433=databaseName=<dbName>=SendStringParametersAsUnicode=false"
                                                : (selectedConnectionType === "DB_CONNECTION" && selectedConnectionDbType === "POSTGRESQL")
                                                ? "jdbc:postgresql://localhost:5432/<dbName>"
                                                : "eg: Connection URL"
                                            } onChange={this.handleConnectionUrlChange} />
                                        </>
                                        )}
                                        <br />
                                        <Form.Check type="checkbox" className="RegBasedUserConfig" style={{ display: "flex", alignItems: "center" }} label={<span style={{ marginLeft: "10px" }}>Is Registry Based User Config</span>} onChange={this.handleRegBUserConfigCheckboxChange} />
                                        {isRegBasedUserConfig ? (
                                        <>
                                            <Form.Label className="RegBUserConfigKey">Registry Based User Config Key</Form.Label>
                                            {/* When a user clicks this textbox, the Resource KeyModel appears.*/}
                                            <Form.Control type="text" readOnly />
                                        </>
                                        ) : (
                                        <>
                                            <Form.Label className="ConnectionUserName">Connection Username</Form.Label>
                                            <Form.Control type="text" placeholder={
                                                (selectedConnectionType === "DB_CONNECTION" && selectedConnectionDbType === "MYSQL")
                                                ? "root"
                                                : (selectedConnectionType === "DB_CONNECTION" && selectedConnectionDbType === "ORACLE")
                                                ? "oracle"
                                                : (selectedConnectionType === "DB_CONNECTION" && selectedConnectionDbType === "MSSQL")
                                                ? "sa"
                                                : (selectedConnectionType === "DB_CONNECTION" && selectedConnectionDbType === "POSTGRESQL")
                                                ? "root"
                                                : "eg: Connection Username"
                                            } onChange={this.handleConnectionUserNameChange} />
                                        </>
                                        )}
                                        <br />
                                        <Form.Check type="checkbox" className="RegBasedPassConfig" style={{ display: "flex", alignItems: "center" }} label={<span style={{ marginLeft: "10px" }}>Is Registry Based Password Config</span>} onChange={this.handleRegBPassConfigCheckboxChange} />
                                        {isRegBasedPassConfig ? (
                                        <>
                                            <Form.Label className="RegBPassConfigKey">Registry Based Password Config Key</Form.Label>
                                            {/* When a user clicks this textbox, the Resource KeyModel appears.*/}
                                            <Form.Control type="text" readOnly />
                                        </>
                                        ) : (
                                        <>
                                            <Form.Label className="ConnectionPassword">Connection Password</Form.Label>
                                            <Form.Control type="text" placeholder="eg: Connection Password"/>
                                        </>
                                        )}
                                        <br />
                                        <Form.Check type="checkbox" className="ConnectionUseTransaction" style={{ display: "flex", alignItems: "center" }} label={<span style={{ marginLeft: "10px" }} >Connection Use Transaction</span>} />
                                        <br />
                                        <Row className='mb-4'>
                                            <Modal.Title className='text-secondary'>
                                                Properties
                                            </Modal.Title>
                                            <Form>
                                                <Form.Group>
                                                    <Form.Label className="PropertyAutocommit">Property Autocommit</Form.Label>
                                                    <Form.Select value={selectedProAutocommit} onChange={this.handleProAutocommitSelectChange}>
                                                        <option value="DEFAULT">DEFAULT</option>
                                                        <option value="TRUE">TRUE</option>
                                                        <option value="FALSE">FALSE</option>
                                                    </Form.Select>
                                                    <Form.Label className="PropertyIsolation">Property Isolation</Form.Label>
                                                    <Form.Select value={selectedProIsolation} onChange={this.handleProIsolationSelectChange}>
                                                        <option value="Action1">DEFAULT</option>
                                                        <option value="Action2">Connection.TRANSACTION_NONE</option>
                                                        <option value="Action3">Connection.TRANSACTION_READ_COMMITTED</option>
                                                        <option value="Action4">Connection.TRANSACTION_READ_UNCOMMITTED</option>
                                                        <option value="Action5">Connection.TRANSACTION_REPEATABLE_READ</option>
                                                        <option value="Action6">Connection.TRANSACTION_SERIALIZABLE</option>
                                                    </Form.Select>
                                                    <Form.Label className="PropertyMaxactive">Property Maxactive</Form.Label>
                                                    <Form.Control type="text" placeholder="-1" />
                                                    <Form.Label className="PropertyMaxidle">Property Maxidle</Form.Label>
                                                    <Form.Control type="text" placeholder="-1" />
                                                    <Form.Label className="PropertyMaxopenstatements">Property Maxopenstatements</Form.Label>
                                                    <Form.Control type="text" placeholder="-1" />
                                                    <Form.Label className="PropertyMaxwait">Property Maxwait</Form.Label>
                                                    <Form.Control type="text" placeholder="-1" />
                                                    <Form.Label className="PropertyMinidle">Property Minidle</Form.Label>
                                                    <Form.Control type="text" placeholder="-1" />
                                                    <Form.Label className="PropertyPoolstatements">Property Poolstatements</Form.Label>
                                                    <Form.Select value={selectedProPoolstatements} onChange={this.handleProPoolstatementsSelectChange}>
                                                        <option value="DEFAULT">DEFAULT</option>
                                                        <option value="TRUE">TRUE</option>
                                                        <option value="FALSE">FALSE</option>
                                                    </Form.Select>
                                                    <Form.Label className="PropertyTestonborrow">Property Testonborrow</Form.Label>
                                                    <Form.Select value={selectedProTestonborrow} onChange={this.handleProTestonborrowSelectChange}>
                                                        <option value="DEFAULT">DEFAULT</option>
                                                        <option value="TRUE">TRUE</option>
                                                        <option value="FALSE">FALSE</option>
                                                    </Form.Select>
                                                    <Form.Label className="PropertyTestwhileidle">Property Testwhileidle</Form.Label>
                                                    <Form.Select value={selectedProTestwhileidle} onChange={this.handleProTestwhileidleSelectChange}>
                                                        <option value="DEFAULT">DEFAULT</option>
                                                        <option value="TRUE">TRUE</option>
                                                        <option value="FALSE">FALSE</option>
                                                    </Form.Select>
                                                    <Form.Label className="PropertyValidationquery">Property Validationquery</Form.Label>
                                                    <Form.Control type="text" placeholder="eg: Property Validationquery" />
                                                    <Form.Label className="PropertyInitialsize">Property Initialsize</Form.Label>
                                                    <Form.Control type="text" placeholder="-1" />
                                                </Form.Group>
                                            </Form>
                                        </Row>
                                    </>
                                )}
                                { selectedConnectionDsType === "CARBON" && (
                                    <>
                                        <br />
                                        <Form.Check type="checkbox" className="ConnectionUseTransaction" style={{ display: "flex", alignItems: "center" }} label={<span style={{ marginLeft: "10px" }} >Connection Use Transaction</span>} />
                                    </>
                                )}
                            </Form.Group>
                        </Form>
                    </Row>
                    <br />
                    <Row className='mb-4'>
                        <Modal.Title className='text-secondary'>
                            Statements
                        </Modal.Title>
                        <Form>
                            <Form.Group>
                                <Form.Label className="SQLStatement">SQLStatement</Form.Label>
                                {/* When a user clicks this textbox, the SQLStatement Model appears.*/}
                                <Form.Control as="textarea" style={{ minHeight: '200px' }} readOnly />
                            </Form.Group>
                        </Form>
                    </Row>
                    <br />
                    <Row className='mb-4'>
                        <Modal.Title className='text-secondary'>
                            Misc
                        </Modal.Title>
                        <Form>
                            <Form.Group>
                                <Form.Label className='mt-2 mb-0'>Description</Form.Label>
                                    <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">Default description</Tooltip>}>
                                        <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                            <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                        </span>
                                    </OverlayTrigger>
                                <Form.Control as="textarea" placeholder='eg: None'/> 
                            </Form.Group>
                        </Form>
                    </Row>
                </Modal.Body>
            </>
        );
    }
}
