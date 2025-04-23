<Router>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/email-ver" element={<EmailVer />} />
        <Route path="/ver-code" element={<VerCode />} />
        <Route path="/helloworld" element={<HelloWorld />} />
        <Route path="/changepass" element={<ChangePassword />} />
      </Routes>
    </Router>