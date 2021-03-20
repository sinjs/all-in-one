import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItem';

import '../../Vendor/Style/icons.css';


class Home extends React.Component {
    render() {
        return <>
            <Container>
                <Box my={3}>
                    <Typography variant="h2">
                        All in one
                    </Typography>
                    <Box className="Welcome-text">
                        <Typography>
                            Welcome to
                            <strong>&nbsp;All in one</strong>,
                            an open source Web-app that contains a bunch of formatting tools,
                            converters and more.
                        </Typography>
                    </Box>
                    <Box className="Welcome-text2">
                        <Typography>
                            Just look at the menu and check it out by yourself!
                        </Typography>
                    </Box>
                </Box>
                <Divider orientation="horizontal" />
                <Box className="FormattingTools" my={3}>
                    <Typography variant="h4" component="p">
                        Formatting
                    </Typography>
                    <Typography component="div">
                        <List component="nav">
                            <ListItem button component="a" href="/tool/00">
                                <ListItemText>
                                    Lorem ipsum dolor sit amet
                                </ListItemText>
                            </ListItem>
                            <ListItem button component="a" href="/tool/01">
                                <ListItemText>
                                    Lorem ipsum dolor sit amet
                                </ListItemText>
                            </ListItem>
                            <ListItem button component="a" href="/tools/0">
                                <ListItemText>
                                    More...
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Typography>
                </Box>
                <Box className="ConvertingTools" my={3}>
                    <Typography variant="h4" component="p">
                        Converting
                    </Typography>
                    <Typography component="div">
                        <List component="nav">
                            <ListItem button component="a" href="/tool/10">
                                <ListItemText>
                                    Lorem ipsum dolor sit amet
                                </ListItemText>
                            </ListItem>
                            <ListItem button component="a" href="/tool/11">
                                <ListItemText>
                                    Lorem ipsum dolor sit amet
                                </ListItemText>
                            </ListItem>
                            <ListItem button component="a" href="/tools/1">
                                <ListItemText>
                                    More...
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Typography>
                </Box>
            </Container>
        </>;
    }
}

export default Home;