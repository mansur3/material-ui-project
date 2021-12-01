
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import Slider from '@mui/material/Slider';




import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

function loadServerRows(page, data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data.rows.slice(page * 5, (page + 1) * 5));
    }, Math.random() * 500 + 100); // simulate network latency
  });
}







function valuetext(value) {
  return `${value * 10000}°C`;
}

const minDistance = 10;




const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Orders = () => {



    const { data } = useDemoData({
        dataSet: 'Commodity',
        rowLength: 100,
        maxColumns: 13,
      });
    
      const [page, setPage] = React.useState(0);
      const [rows, setRows] = React.useState([]);
      const [loading, setLoading] = React.useState(false);
      const [selectionModel, setSelectionModel] = React.useState([]);
      const prevSelectionModel = React.useRef(selectionModel);
    
      React.useEffect(() => {
        let active = true;
    
        (async () => {
          setLoading(true);
          const newRows = await loadServerRows(page, data);
    
          if (!active) {
            return;
          }
    
          setRows(newRows);
          setLoading(false);
          setTimeout(() => {
            setSelectionModel(prevSelectionModel.current);
          });
        })();
    
        return () => {
          active = false;
        };
      }, [page, data]);





    const [value1, setValue1] = React.useState([20, 37]);

    const handleChange1 = (event, newValue, activeThumb) => {
      if (!Array.isArray(newValue)) {
        return;
      }
  
      if (activeThumb === 0) {
        setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
      } else {
        setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
      }
    };


    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <Item>
            <Stack sx = {{ml : 8}} spacing={2} direction="row">
                <Button  variant="text">ALL</Button>
                <Button variant="text">SHIPPED</Button>
                <Button variant="text">PROCESSING</Button>
                <Button variant="text">COMPLETED</Button>
                

            </Stack>
            </Item>
          </Grid>
          <Grid item xs={2}>
            {/* <Item> */}
            <TextField
                id="date"
                label="Start Date"
                type="date"
                minRows={-1}
                defaultValue="12/10/2020"
                sx={{ width: 220 }}
                InputLabelProps={{
                shrink: true,
                }}
            />
            {/* </Item> */}
          </Grid>
          <Grid item xs={2}>
            
          <TextField
                id="date"
                label="End Date"
                type="date"
                minRows={-1}
                defaultValue="12/10/2020"
                sx={{ width: 220 }}
                InputLabelProps={{
                shrink: true,
                }}
            />
          </Grid>
          <Grid item xs={3}>
            {/* <Item> */}
                price range
              <Slider
                    getAriaLabel={() => 'Minimum distance'}
                    value={value1}
                    onChange={handleChange1}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    disableSwap
                />
            {/* </Item> */}
          </Grid>
        </Grid>
        <Grid container spacing={2}>
                

        <div style={{ height: 400, width: '100%', marginTop : "50px" }}>
      <DataGrid
        rows={rows}
        columns={data.columns}
        pagination
        checkboxSelection
        pageSize={5}
        rowsPerPageOptions={[5]}
        rowCount={100}
        paginationMode="server"
        onPageChange={(newPage) => {
          prevSelectionModel.current = selectionModel;
          setPage(newPage);
        }}
        onSelectionModelChange={(newSelectionModel) => {
          setSelectionModel(newSelectionModel);
        }}
        selectionModel={selectionModel}
        loading={loading}
      />
    </div>




        </Grid>
      </Box>
    )
}

export {Orders};