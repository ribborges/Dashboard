import Header from "../../components/Header";
import Spacer from "../../components/separator/Spacer";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import { useGetCustumersQuery } from "../../state/api";

export default function Custumers() {
    const { data, isLoading } = useGetCustumersQuery();

    const columns = [{
        field: "_id",
        headerName: "ID",
        flex: 1
    }, {
        field: "name",
        headerName: "Name",
        flex: 0.5
    }, {
        field: "email",
        headerName: "Email",
        flex: 1
    }, {
        field: "phoneNumber",
        headerName: "Phone",
        flex: 0.5,
        renderCell: (params: any) => {
            return params.value.replace(/^(\d{2})(\d{4})(\d{4})/, "($1)$2-$3")
        }
    }, {
        field: "country",
        headerName: "Country",
        flex: 0.4
    }, {
        field: "occupation",
        headerName: "Occupation",
        flex: 1
    }, {
        field: "role",
        headerName: "Role",
        flex: 0.5
    }]

    return (
        <>
            <Header title="CUSTUMERS" subtitle="List of Custumers" />
            <Spacer height={50} />
            <Box height="75vh" sx={{
                "& .MuiDataGrid-root": {
                    border: "none"
                },
                "& .MuiDataGrid-cell": {
                    borderBottom: "none !important"
                },
                "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: "#9500ffaa",
                    borderBottom: "none"
                },
                "& .MuiDataGrid-virtualScroller": {
                    backgroundColor: "#333333"
                },
                "& .MuiDataGrid-footerContainer": {
                    borderTop: "none",
                    backgroundColor: "#9500ff77"
                },
                "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                    color: "white !important"
                }
            }}>
                <DataGrid sx={{ "*": { color: "white" } }}
                    loading={isLoading || !data}
                    getRowId={(row) => row._id}
                    rows={data || []}
                    columns={columns}
                />
            </Box>
        </>
    );
}