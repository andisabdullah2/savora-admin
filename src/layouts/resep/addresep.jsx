/* eslint-disable*/
/**
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import 'index.css';
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
// Data
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../../firebaseConfig";

function AddResep(action) {
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


  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <MDBox >
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
                  Tambah Data Resep
                </MDTypography>
              </MDBox>
              <Card>
                <div className="form-card px-10 py-10">
                    <form>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-2"  style={{fontSize: '16px'}}>Nama Resep</label>
                            <div class="col-sm-10">
                            <input type="text" class="form-control" id="nama" placeholder="Nama Resep"/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-2 " style={{fontSize: '16px'}}>Bahan Utama</label>
                            <div class="col-sm-10">
                            <input type="text" class="form-control" id="bahanUtama" placeholder="Bahan Utama"/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="jenis" class="col-sm-2" style={{fontSize: '16px'}}>Jenis</label>
                            <div class="col-sm-10">
                                <select class="form-control" aria-label="Default select example" id="jenis">
                                    <option selected>pilih</option>
                                    <option value="makanan">Makanan</option>
                                    <option value="minuman">Minuman</option>
                                    <option value="khusus">Khusus</option>
                                </select>                            
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-2 " style={{fontSize: '16px'}}>Kategori</label>
                            <div class="col-sm-10">
                            <input type="text" class="form-control" id="kategori" placeholder="Masukkan Kategori"/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-2 " style={{fontSize: '16px'}}>Lama Masak</label>
                            <div class="col-sm-10">
                            <input type="text" class="form-control" id="waktu" placeholder="Waktu Memasak Resep"/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-2 " style={{fontSize: '16px'}}>Link Vidio</label>
                            <div class="col-sm-10">
                            <input type="text" class="form-control" id="linkVidio" placeholder="Link Vidio Resep"/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-2 " style={{fontSize: '16px'}}>Gambar Masakan</label>
                            <div class="col-sm-10">
                            <input type="file" class="form-control" id="image" placeholder="Gambar"/>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-success" style={{backgroundColor:'orange', fontWeight:'bold'}}>Simpan</button>
                    </form>
                </div>
              </Card>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default AddResep;
