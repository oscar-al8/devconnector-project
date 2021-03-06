import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Moment from 'react-moment'
import { deleteExperience } from '../../actions/profile'

const Experience = ({ experience, deleteExperience }) => {

    const experiences = experience.map(exp => (
        <tr key={exp._id}>
            <td>{exp.company}</td>
            <td className='hide-sm'>{exp.title}</td>
            <td className='hide-sm'>
                <Moment format='YYYY/MM/DD'>{exp.from}</Moment> - {
                    exp.to === null ? (
                        ' Now'
                    ) : (
                        <Moment format='YYYY/MM/DD'>{exp.to}</Moment>
                    )
                }
            </td>
            <td>
                <button className='btn btn-danger' onClick={() => deleteExperience(exp._id)}>Delete</button>
            </td>
        </tr>
    ))

    return (
        <Fragment>
            <h2 className='my-2'>Experience Credentials</h2>
            {experiences.length > 0 ? (
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th className='hide-sm'>Title</th>
                            <th className='hide-sm'>Years</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {experiences}
                    </tbody>
                </table>
            ) : (
                <h4>No experience credentials</h4>
            )}
        </Fragment>
    );

}

Experience.propTypes = {
    deleteExperience: PropTypes.func.isRequired,
    experience: PropTypes.array.isRequired
}

export default connect(null, { deleteExperience })(Experience)