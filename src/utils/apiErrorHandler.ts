export const handleApiError = (error: any) => {
  const errorResponse = {
    errorMessage: error.response?.data
      ? error.response.data
      : "Something went wrong",
    status: error.response ? error.response.status : 500,
  };

  return errorResponse;
};
