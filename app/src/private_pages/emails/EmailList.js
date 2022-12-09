import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../contexts/user';
import Loading from '../../components/Loading';
import usePrivateFetch from '../../hooks/usePrivateFetch';

const EmailList = () => {
	const { accessToken } = useContext(UserContext); //global user

	const [emails, setEmails] = useState();
	const [loading, setLoading] = useState(true);
	const [errors, setErrors] = useState('');

	let { callFetch } = usePrivateFetch();

	useEffect(() => {
		let url = '/api/email';
		let options = {
			headers: { Authorization: `Bearer ${accessToken}` },
		};

		let getEmails = async () => {
			try {
				let { data, response } = await callFetch(url, options);
				// console.log(data, response);

				if (!response === 403 && data.errors) {
					setLoading(false);
					setErrors(data.errors);
				} else if (data.msg) {
					setEmails(data.msg);
					setLoading(false);
					setErrors('');
				}
			} catch (err) {
				console.log('dw email ', err.message);
				setLoading(false);
				setErrors('No Server Response');
			}
		};
		getEmails();

		// eslint-disable-next-line
	}, []);

	return (
		<>
			{loading && <Loading />}
			{errors && (
				<div className='alert alert-danger text-center'>
					<span className='text-danger text-capitalize'>{errors}</span>
				</div>
			)}
			{!loading && emails && (
				<ul>
					{emails.map((item, i) => (
						<li key={i}>{item.email}</li>
					))}
				</ul>
			)}
		</>
	);
};

export default EmailList;
