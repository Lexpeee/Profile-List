import React from "react";
import { Table, TableRow, TableBody, TableCell, TableHead, TableContainer, Paper, Button, Avatar, Grid, Tooltip } from '@mui/material'
import { Search, Male, Female, RemoveRedEye } from "@mui/icons-material";

const ProfileList = ({ profiles, onUserSelect }) => {
    return (
        <>
            <TableContainer component={Paper}>
                <Table 
                    size="small" 
                    sx={{ minWidth: 650 }}
                >
                    <TableHead>
                        <TableRow>

                            <TableCell>Name</TableCell>
                            <TableCell align="right">Age</TableCell>
                            <TableCell align="center">Gender</TableCell>
                            <TableCell align="center">Phone</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {profiles.map((profile, i) => {
                            const fullName = `${profile.name.first} ${profile.name.last}`
                            return(
                                <TableRow key={i}>
                                    <TableCell>
                                        <Grid container spacing={4}>
                                            <Grid item >
                                                <Avatar alt={fullName.replace(' ', '-')} src={profile.picture.thumbnail}/>
                                            </Grid>
                                            <Grid item alignItems={"center"}>
                                                <div>{fullName}</div>
                                                <small>{profile.email}</small>
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                    <TableCell align="right">{profile?.dob?.age}</TableCell>
                                    <TableCell align="center">{profile?.gender === "male" ? <Tooltip title="Male" placement="right"><Male sx={{ color: '#2aa'}}/></Tooltip> : <Tooltip title="Female" placement="right"><Female sx={{ color: '#faa'}}/></Tooltip>}</TableCell>
                                    <TableCell align="center">{profile.cell}</TableCell>
                                    <TableCell>
                                        <Tooltip title="View">
                                            <Button
                                                variant="contained"
                                                onClick={() => onUserSelect(Number(i))}
                                            ><RemoveRedEye/></Button>
                                        </Tooltip>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>

        </>
    );
};

export default ProfileList;
