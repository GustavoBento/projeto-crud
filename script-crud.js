const taskListContainer = document.querySelector('.app__section-task-list')

let lista = [
    {
        descricao: 'Tarefa concluída!',
        concluida: true
    }, 
    {
        descricao: 'Tarefa pendente.',
        concluida: false
    }
]

const taskIconSvg = `
<svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24"
    fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#FFF" />
    <path
        d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z"
        fill="#01080E" />
</
`

function createTask(tarefa) {
    const li = document.createElement('li')
    li.classList.add('app__section-task-list-item')

    const iconSvg = document.createElement('svg')
    iconSvg.innerHTML = taskIconSvg

    const paragraph = document.createElement('p')
    paragraph.classList.add('app__section-task-list-item-description')
    paragraph.textContent = tarefa.descricao

    li.appendChild(iconSvg)
    li.appendChild(paragraph)

    return li
}