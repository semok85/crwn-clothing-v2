import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
const SignIn = () => {
	const logGoogleUser = async () => {
		const rensponse = await signInWithGooglePopup();
	};
	return (
		<>
			<h1>Sign In Page</h1>
			<button onClick={logGoogleUser}>SignIn With Google</button>
		</>
	);
};
export default SignIn;
