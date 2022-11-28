const errorHandler = (error, req, res, next) => {
	if (error) {
		if (error.code) {
			return res.status(error.code).json({
				error: error.message,
				errorName: error.name,
			});
		}
		const sendedError = { ...error, code: 500 };
		return res.status(500).json({
			error: sendedError,
		});
	}
	return res.status(400).send();
};

export default { errorHandler };
