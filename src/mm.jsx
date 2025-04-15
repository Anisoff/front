<Router>
<Routes>
  <Route path="/" element={
    <>
      <Navbar />
    </>
  } />
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/email-ver" element={<Emailver />} />
  <Route path="/ver-code" element={<Vercode />} />
</Routes>
</Router>