import React from 'react'
import { NavBar } from './NavBar'

const Add = () => {
  return (
    <div>
        <NavBar/>
<h1><center><b>ADD ITEMS</b></center></h1>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
<div className="row g-4">
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">ID</label>
<input type="text" className="form-control" />

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

    <label htmlFor="" className="form-label">TITLE</label>
<input type="text" className="form-control" />


    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

    <label htmlFor="" className="form-label">PRICE</label>
<input type="text" className="form-control" />


    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

    <label htmlFor="" className="form-label">CATEGORY</label>
<select name="" id="" className="form-control">
    <option value="men's clothing">men's clothing</option>
    <option value="jewelery">jewelery</option>
    <option value="electronics">electronics</option>
    <option value="women's clothing">women's clothing</option>
</select>


    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">RATING</label>
<input type="text" className="form-control" />

    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
<center><button className="btn btn-success">SUBMIT</button></center>

    </div>
</div>


        </div>
    </div>
</div>

    </div>
  )
}

export default Add