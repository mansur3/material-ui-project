import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';





import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';





import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
  Tooltip,
  PieSeries,
} from '@devexpress/dx-react-chart-material-ui';
import { EventTracker } from '@devexpress/dx-react-chart';

const chartData = [
  { year: '03-10-2020', population: 2 },
  { year: '04-10-2020', population: 3 },
  { year: '05-10-2020', population: 3 },
  { year: '06-10-2020', population: 4 },
  { year: '07-10-2020', population: 5 },
  { year: '08-10-2020', population: 6 },
  { year: '09-10-2020', population: 6 },
];



const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const Home = () => {

    const data = [
        { argument:'Completed', value:77 },
        { argument:'pending', value:15 },
        { argument:'not started', value:8 },
        // { argument:'Thursday', value:20 },
        // { argument:'Friday', value:20 },
      ];

    return (
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
             
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
                    Orders
                    </Typography>
                    <Typography variant="h3" component="div">
                        6
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="green">
                   25%
                    </Typography>
                    <Typography >
                    
                    
                    {'"Increase from yesterday"'}
                    </Typography>
                </CardContent>
               
                </Card>
             
            </Grid>
            <Grid item xs={3}>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
                   Total users
                    </Typography>
                    <Typography variant="h3" component="div">
                    1000
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="red">
                        10% 
                    </Typography>
                    <Typography >
                    Decrese from last week
                    
                    </Typography>
                </CardContent>
                
                </Card>
             
            </Grid>
            <Grid item xs={3}>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
                   Completed orders 
                    </Typography>
                    <Typography variant="h3" component="div">
                    550
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="red">
                   5 %
                    </Typography>
                    <Typography>
                    decrease from last week
                    
                    </Typography>
                </CardContent>
                
                </Card>
             
            </Grid>
            <Grid item xs={3}>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
                    TOTAL PROFIT
                    </Typography>
                    <Typography variant="h3" component="div">
                    95%
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="green">
                    25%
                    </Typography>
                    <Typography>
                    Increases from last week
                    
                    </Typography>
                </CardContent>
                
                </Card>
             
            </Grid>
          </Grid>
          <Grid sx = {{mt: 2}} container spacing={2}>
              <Grid item xs={8}>
                


                <Paper>
                    <Chart
                    data={chartData}
                    >
                    <ArgumentAxis />
                    <ValueAxis />

                    <BarSeries
                        valueField="population"
                        argumentField="year"
                    />
                    <Title
                        text="Activity"
                    />
                    <EventTracker />
                    <Tooltip />
                    </Chart>
                </Paper>


                
              </Grid>
              <Grid item xs={4}>
                 
                     
                 <Paper>
                    <Chart
                    data={data}
                    >
                    <PieSeries valueField="value" 
                        argumentField="argument" 
                        outerRadius= {0.7}
                        innerRadius={0.3} />

                    <EventTracker />
                    <Tooltip /> 


                    <Title text="Stat"/>
                    </Chart>
                     <Grid sx = {{mt: -9, ml : 3}} container spacing={2}>
                        <Grid item xs={4}>
                            <Typography component = "p">77%</Typography>
                            <Typography variant="h6" component="div">completed</Typography>
                        </Grid>
                        <Grid item xs={4}>
                        <Typography component = "p">15%</Typography>
                            <Typography variant="h6" component="div">pending</Typography>
                        </Grid>
                        <Grid item xs={4}>
                        <Typography component = "p">8%</Typography>
                            <Typography variant="h6" component="div">Not started</Typography>
                        </Grid>
                     </Grid>

                 </Paper>     
                
              </Grid>
          </Grid>
        </Box>
      );
}

export {Home};