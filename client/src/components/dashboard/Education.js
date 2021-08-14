import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Moment from 'react-moment'
import { deleteEducation } from '../../actions/profile'

const Education = ({ education, deleteEducation }) => {

    const educations = education.map(educ => (
        <tr key={educ._id}>
            <td>{educ.school}</td>
            <td className='hide-sm'>{educ.degree}</td>
            <td className='hide-sm'>
                <Moment format='YYYY/MM/DD'>{educ.from}</Moment> - {
                    educ.to === null ? (
                        ' Now'
                    ) : (
                        <Moment format='YYYY/MM/DD'>{educ.to}</Moment>
                    )
                }
            </td>
            <td>
                <button className='btn btn-danger' onClick={() => deleteEducation(educ._id)}>Delete</button>
            </td>
        </tr>
    ))

    return (
        <Fragment>
            <h2 className='my-2'>Education Credentials</h2>
            {educations.length > 0 ? (
                <table className='table'>
                    <thead>
                        <tr>
                            <th>School</th>
                            <th className='hide-sm'>Degree</th>
                            <th className='hide-sm'>Years</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {educations}
                    </tbody>
                </table>
            ) : (
                <h4>No education credentials</h4>
            )}
        </Fragment>
    );

}

Education.propTypes = {
    deleteEducation: PropTypes.func.isRequired,
    education: PropTypes.array.isRequired
}

export default connect(null, { deleteEducation })(Education)