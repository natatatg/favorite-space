import * as React from "react";
import { useState, useEffect } from "react";
import { styled, createTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
//import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
//import MoreVertIcon from '@mui/icons-material/MoreVert';
import RocketLaunchTwoToneIcon from '@mui/icons-material/RocketLaunchTwoTone';
import { DateTime } from 'luxon';

const theme = createTheme({
    components: {
        MuiCardHeader: {
        styleOverrides: {
          title: {
            fontSize: '1.6em',
          },
        },
      },
    },
  });

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  


export default function SpaceCard(props) {
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
      };
    const [isLiked, setIsLiked] = useState(false);
    const handleLike = () => {
        setIsLiked(!isLiked);
    };
    const [isLikedColor, setIsLikedColor] = useState({color:'grey'});
    const [likes, setLikes] =  useState(1);

    useEffect(()=> {
        isLiked ? setIsLikedColor({color:'#ec065a'}) : setIsLikedColor({color:'grey'});
    }, [isLiked]);

    useEffect(() => {
        setLikes(Math.floor(Math.random() * 2000));
    }, []);
    useEffect(()=> {
        isLiked ? setLikes(prevlikes => prevlikes + 1) : setLikes(prevlikes => prevlikes- 1);
    }, [isLiked]);



    const calculateDate = () => {
        let splitDateArr = (props.nasaData.date).split('-');
        //create new date from nasa data for formatting
        const dt = DateTime.fromObject({
            day: splitDateArr[2],
            month: splitDateArr[1],
            year: splitDateArr[0]
            })
        return(dt.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY));
    };
    const date = calculateDate();

    

    return (
        <Card sx={{ 
            minWidth: {
                xs: 200,
                sm: 500,
                md: 550,
                lg: 550,
                xl: 900 },
            maxWidth: {
                xs: 400,
                sm: 600,
                md: 650,
                lg: 750,
                xl: 900 },
            mx: 'auto',
            my: 2
             }}>
      <CardHeader
        theme={theme}
        avatar={<RocketLaunchTwoToneIcon></RocketLaunchTwoToneIcon>
        }
        title={props.nasaData.title}
        subheader={date}
        sx={{
            fontSize: {
                xs: 12,
                sm: 16,
                md: 18,
                lg: 20,
                xl: 22
            },
        }}
      />
      <CardMedia
        component="img"
        image={props.nasaData.url}
        alt={props.nasaData.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        {(props.nasaData.copyright) && `Copyright: ${props.nasaData.copyright}`}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites"
        onClick={handleLike}>
          <FavoriteIcon style={isLikedColor}/>
        </IconButton>
        <Typography>liked by {likes} space lovers</Typography>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          
          <Typography paragraph>
            {props.nasaData.explanation}
          </Typography>                    
        </CardContent>
      </Collapse>
    </Card>

    )
}