import React from 'react';
import{Card,CardActions,CardActionArea,CardContent,CardMedia,Button,Typography} from '@material-ui/core';
 import useStyles from './styles.js'; 

 const NewsCard = ({article:{description,publishedAt,source,title,url,urlToImage},i,activeArticle}) => {
     const classes= useStyles();  
    return (
    
        <Card className={classes.card}>
            <CardActionArea href={url} target="_blank">
                <CardMedia className={classes.media} image={urlToImage ||'https://media4.s-nbcnews.com/j/newscms/2019_01/2705191/nbc-social-default_b6fa4fef0d31ca7e8bc7ff6d117ca9f4.nbcnews-fp-1200-630.png'} />
                    <div className={classes.details}>
                        <Typography variant="body2" color="textSecondary" component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
                        <Typography variant="body2" color="textSecondary" component="h2">{source.name}</Typography>

                       
                    </div>
                    <Typography className={classes.title} gutterBottom variant="h5">{title}</Typography>
                    <CardContent>
                        <Typography variant="body2" color="textPrimary" component="p">{description}</Typography>
                    </CardContent>
                
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary">Learn More</Button>
                <Typography variant="h5" color="textSecondary">{i+1}</Typography>
            </CardActions>
        </Card>
    )
}
export default NewsCard;
