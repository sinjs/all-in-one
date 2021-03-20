import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import '../../Style/NotFound.css'

class NotFound extends React.Component {
    render() {
        return <>
            <Container maxWidth="sm" align="center">
                <Box my={3}>
                    <Typography variant="h3">
                        404
                    </Typography>
                    <Box my={2}>
                        <Typography variant="h5">
                            Page not found
                        </Typography>
                    </Box>
                    <Box my={2}>
                        <Typography variant="body1">
                            We couldn&apos;t find the requested page on the server. <br />
                            If you think this is a server error, please contact <a href="/contact-the-owner">the owner</a>.
                        </Typography>
                    </Box>
                </Box>

            </Container>
        </>;
    }
}

export default NotFound;