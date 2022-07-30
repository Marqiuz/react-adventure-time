import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import DetailsSingleAdv from '../../components/DetailsSingleAdv';

function Details(props) {
    let arr = props.adventures.filter(adv => adv._id.toString() === props.match.params.advid.toString());
    let currAdv = arr[0];


    return (
        <div>
            <h2 className="allHeading">{currAdv.title}</h2>
            <div className="card col-6 contDet">
                <img className="imgDet" src={currAdv.imageUrl} alt={currAdv.title} />

                <DetailsSingleAdv adv={currAdv}/>   
                   
                <div className="card-footer" style={{ textAlign: 'center' }}>
                    {
                        sessionStorage.getItem('username') === currAdv.author ?
                            (<Fragment>
                                <Link type="button" to={'/adventure/edit/' + currAdv._id} className="btn btn-primary float-center btn-sm" style={{ marginRight: '40px' }} >Edit</Link>
                                <Link type="button" to={'/adventure/delete/' + currAdv._id} className="btn btn-primary float-center btn-sm" style={{ background: 'red' }} >Delete</Link>
                            </Fragment>)
                            : null
                    }
                    {
                        props.isAdmin ?
                        <Link type="button" to={'/adventure/delete/' + currAdv._id} className="btn btn-primary float-center btn-sm" style={{ background: 'red' }} >Delete</Link>
                        : null

                    }
                </div>
            </div>
        </div>
    )
}

export default Details;