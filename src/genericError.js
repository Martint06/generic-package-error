// eslint-disable-next-line max-classes-per-file
class AccessDeniedError extends Error {
	constructor(paramName) {
		super(`${paramName}`);
		this.name = "AccessDeniedError";
		this.code = 403;
	}
}
class MissingParamError extends Error {
	constructor(paramName) {
		super(`${paramName}`);
		this.name = "MissingParamError";
		this.code = 400;
	}
}

class InvalidParamError extends Error {
	constructor(paramName) {
		super(`${paramName}`);
		this.name = "InvalidParamError";
		this.code = 400;
	}
}

class NotAcceptableError extends Error {
	constructor(paramName) {
		super(`${paramName}`);
		this.name = "NotAcceptableError";
		this.code = 406;
	}
}
export {
	MissingParamError,
	InvalidParamError,
	NotAcceptableError,
	AccessDeniedError,
};
