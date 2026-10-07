
export const Errorhandling = (err, req, res, next) => {
    return res.status(err.status || 500).json({
        error:{
            message: err.message ? err.message : err.mymsg,
            randomInfo: "some information related to error",
            stack: err.stack,
        }
    })
}