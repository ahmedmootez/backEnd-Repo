require('./config/db')

const app =require('express')()
const port=process.env.PORT || 3000

const UserRouter=require('./api/User')
const AlimentRouter=require('./api/Aliment')
const RecetteRouter=require('./api/Recette')
const NotreRepasRouter=require('./api/NotreRepas')
const DiaryRouter=require('./api/Diary')
const NotreAlimentRouter=require('./api/NotreAliment')
const ExerciceRouter=require('./api/Exercice')
const ExerciceTermineRouter=require('./api/ExerciceTermine')
const DefitRouter=require('./api/Defit')
const Defit3Router=require('./api/Defit3')
const TaskRouter=require('./api/Task')
const EauRouter=require('./api/Eau')

const bodyParser=require('express').json
app.use(bodyParser()) 

app.use('/user', UserRouter)
app.use('/aliment', AlimentRouter)
app.use('/recette', RecetteRouter)
app.use('/notrerepas',NotreRepasRouter)
app.use('/diary', DiaryRouter)
app.use('/notrealiment',NotreAlimentRouter)
app.use('/exercice',ExerciceRouter)
app.use('/exercicetermine',ExerciceTermineRouter.router)
app.use('/defit',DefitRouter)
app.use('/defit3',Defit3Router)
app.use('/task',TaskRouter)
app.use('/eau',EauRouter)
app.listen(port,()=>{
    console.log(`server running in port ${port}`)
})