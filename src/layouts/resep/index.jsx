/* eslint-disable*/
/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import MDBadge from "components/MDBadge";
import MDButton from "components/MDButton";
import { Link } from "react-router-dom";
import MDAvatar from "components/MDAvatar";
// Data
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../../firebaseConfig";

function Resep(action) {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const articleRef = collection(db, "resep");
    const q = query(articleRef, orderBy("created_at", "desc"));
    onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArticles(articles);
      console.log(articles);
    });
  }, []);

  const Kategori = ({ name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
      </MDBox>
    </MDBox>
  );

  const SubKategori = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );



  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <MDBox >
              <MDButton color={action.color ? action.color : "info"}>
                Tambah Data
              </MDButton>
            </MDBox>
              <br /><br />
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Kategori Makanan
                </MDTypography>
              </MDBox>
              <div>
                {articles.length === 0 ? (
                  <p>Tidak Ada Data</p>
                ) : (
                  articles.map(
                    ({
                      id, nama,jenis,kategori,bahanUtama,waktu,image
                    }) => (

                      <MDBox pt={3}>
                      <DataTable
                        table={{
                          columns: [
                            {
                              Header: "Nama",
                              accessor: "nama",
                              align: "left",
                            },
                            {
                              Header: "Jenis",
                              accessor: "jenis",
                              align: "left",
                            },
                            {
                              Header: "Kategori",
                              accessor: "kategori",
                              align: "left",
                            },
                            {
                              Header: "Bahan Utama",
                              accessor: "bahanUtama",
                              align: "left",
                            },
                            {
                              Header: "Waktu",
                              accessor: "waktu",
                              align: "left",
                            },
                            {
                              Header: "Image",
                              accessor: "image",
                              align: "center",
                            },
                            {
                              Header: "action",
                              accessor: "action",
                              align: "center",
                            },
                          ],
                          rows: [
                            {
                              nama: (
                                <MDTypography component="a"  variant="caption" color="text" fontWeight="medium">
                                  {nama}
                                </MDTypography>
                              ),
                              jenis: (
                                <MDTypography component="a"  variant="caption" color="text" fontWeight="medium">
                                  {jenis}
                                </MDTypography>
                              ),
                              kategori: (
                                <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
                                  {kategori}
                                </MDTypography>
                              ),
                              bahanUtama: (
                                <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
                                  {bahanUtama}
                                </MDTypography>
                              ),
                              waktu: (
                                <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
                                  {waktu}
                                </MDTypography>
                              ),
                              image: (
                                <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
                                  <img src={image} alt="" width="100px" height="65px"/>
                                </MDTypography>

                              ),
                              action: (
                                <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                                  Edit
                                </MDTypography>
                              ),
                            },
                          ],}}
                        isSorted={false}
                        entriesPerPage={false}
                        showTotalEntries={false}
                        noEndBorder
                      />
                    </MDBox>
                    )
                  )
                )}
              </div>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Resep;
