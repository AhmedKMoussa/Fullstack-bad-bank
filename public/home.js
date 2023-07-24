function Home() {
  const useEffect = React.useEffect;
  const { userName, setUsername } = React.useContext(UserContext);
  const { userBalance, setUserBalance } = React.useContext(UserContext);
  const { isLoggedIn, setIsLoggedIn } = React.useContext(UserContext);

  function checkIfLoggedIn() {
    if (localStorage.getItem("token")) {
      const firstLoginCheck = JSON.parse(localStorage.getItem("loggedIn"));
      setIsLoggedIn(firstLoginCheck);
    }
  }
  useEffect(() => {
    checkIfLoggedIn();
    if (isLoggedIn == true) {
      const newUserName = window.localStorage.getItem("token");
      const parsedUserInfo = JSON.parse(newUserName);
      // console.log(parsedUserInfo.userName)
      setUsername(parsedUserInfo.userName);
      setUserBalance(parsedUserInfo.userBalance.toFixed(2));
    }
  }, [isLoggedIn]);
  return (
    <Card
      bgcolor="white"
      txtcolor="Black"
      header="BadBank Landing Module"
      title="Welcome to the bank"
      text="You can move around using the navigation bar."
      body={<img src="bank.png" className="img-fluid" alt="responsive image" />}
    />
  );
}
