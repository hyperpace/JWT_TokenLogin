/**
 * secret : JWT 토큰을 검증하는 서명부분을 만들 때, 해싱 알고리즘에서 사용 될 비밀 키
 * mongodbUri : mongodb://<dbuser>:<dbpassword>@ds121225.mlab.com:21225/jwt-tutorial
 */
module.exports = {
    'secret' : 'SeCrEtKeYfOrHaShInG',
    'mongodbUri' : 'mongodb://illaship:java003@ds121225.mlab.com:21225/jwt-tutorial'
}