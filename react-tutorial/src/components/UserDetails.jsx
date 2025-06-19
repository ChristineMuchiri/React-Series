import PropTypes from 'prop-types'

export function UserDetails({ user }) {
    return (
        <div>
            <b>ID: </b>
                    <span>{user.id}</span>
                    <br />
                    <b>Username: </b>
                    <span>{user.username}</span>
                    <br />
                    <b>Emai: </b>
                    <span>{user.email}</span>
                    <br />
        </div>
    )
}
UserDetails.PropTypes = {
    user: PropTypes.shape({
        id: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired
    })
}