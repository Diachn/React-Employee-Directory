import React from "react"
import "./style.css";

function SearchBox(props) {

    return (
        <div className="container-fluid">


            <header className="z-depth-3 col s12" >
                <div className="row">

                    <div className="col s6">



                        <h3 className=" headerText">Employee Directory</h3>

                    </div>

                        <div className="col s6 inputAndButton ">

                            <input
                                onChange={props.handleInputChange}
                                value={props.value}
                                id="employees"
                                type="text"
                                name="search"
                                list="employee"
                                className=" inputBox  "
                                placeholder="Search by name" />
 <button onClick={props.handleSearch} >Search</button>

                        </div>
                    </div>
            </header>
        </div >
    )
}

export default SearchBox