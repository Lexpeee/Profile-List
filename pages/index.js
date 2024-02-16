/**
 * Bazar Profile Finder Coding Interview
 * Mostly stolen from https://medium.com/@justin.sherman/react-coding-interview-challenge-18-257bbcb7429a but I changed it cuz I didnt like his code also I wanted it to work with NextJS
 */

import React, { useEffect, useState, useMemo, use } from "react";
import axios from "axios";
import ProfileList from "../lib/components/ProfileList";
import { Container, Box, TextField, InputAdornment, Dialog, DialogContent, Typography, Tooltip, Grid, Avatar, DialogTitle } from "@mui/material";
import { Search, Male, Female, RemoveRedEye } from "@mui/icons-material";

const Home = () => {
    const [profiles, setProfiles] = useState([]);
		const [searchInput, setSearchInput] = useState(null)

		const [selectedUser, setSelectedUser] = useState(null)
		const [userModalOpened, setUserModalOpened] = useState(false)

		const filteredUsers = useMemo(() => {
			if (searchInput) {
				const filtered = profiles.filter(profile => {
					const fullName = `${profile.name.first} ${profile.name.last}`
					return fullName?.includes(searchInput) || profile.email.includes(searchInput)
				})
				return filtered
			}
			return profiles
		}, [profiles, searchInput])

		const handleSelectUser = (index) => {
			setSelectedUser(filteredUsers[index])
		}
		
    const getUsers = () => {
        axios
        .get("https://randomuser.me/api?results=20")
        .then((res) => {
            setProfiles(res.data?.results);
        })
        .catch((err) => {
            console.error(err);
            alert("Profile request failed");
        });
    }

		useEffect(()=>{
			if (selectedUser) {
				setUserModalOpened(true)
			}
		}, [selectedUser])

    useEffect(() => {
			getUsers()
    }, []);

    if (!profiles) return <h1>Loading profiles...</h1>;

    return <>
			{/* navbar */}
			<Box
				sx={{
					borderBottom: '1px solid #ddd',
					marginBottom: '8px',
					padding: '16px',
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center'
				}}
			>
				<h2>Profile List</h2>
				<TextField 
					id="outlined-basic"
					size="small"
					variant="outlined" 
					InputProps={{
						startAdornment: <InputAdornment>
							<Search/>
						</InputAdornment>
					}}
					value={searchInput}
					onChange={e => setSearchInput(e?.target?.value)}
				/>
				<div/>
			</Box>
			<Container>
				{/* main profile */}
				<ProfileList profiles={filteredUsers} onUserSelect={handleSelectUser}/>
			</Container>
			<Dialog
				open={userModalOpened}
				onClose={() => {
					setUserModalOpened(false),
					setSelectedUser(null)
				}}
				>
				<DialogTitle>User Information</DialogTitle>
				<DialogContent 
					dividers
				>
					<Grid container spacing={4} alignItems={'center'} sx={{marginBottom: 4}}>
						<Grid xs={3} item textAlign={"center"}>
							<Avatar alt='avatar-image' src={selectedUser?.picture?.large} sx={{ height: 100, width: 100}}/>
						</Grid>
						<Grid xs={9} item alignItems={'center'}>
							<Typography h1>{selectedUser?.gender === "male" ? <Tooltip title="Male" placement="right"><Male sx={{ color: '#2aa'}}/></Tooltip> : <Tooltip title="Female" placement="right"><Female sx={{ color: '#faa'}}/></Tooltip>}<strong>{selectedUser?.name?.first} {selectedUser?.name?.last}</strong> <small>{selectedUser?.email}</small></Typography>
							<Typography h2>{selectedUser?.cell}</Typography>
							<Typography small>{selectedUser?.location?.street?.number} {selectedUser?.location?.street?.name} {selectedUser?.location?.city} {selectedUser?.location?.state}, {selectedUser?.location?.postcode}</Typography>
						</Grid>
					</Grid>
				</DialogContent>
			</Dialog>
		</>
};

export default Home;
