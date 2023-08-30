export const UserAbout = ({ Assets, Languages, Localization, useLanguage }) => {
    let working_exps = {
        '11.09.2013': 'Art-Director in ART.CO',
        '12.09.2013': 'Art-Director2 in ART.CO',
        '13.09.2013': 'Art-Director3 in ART.CO',
        '14.09.2013': 'Art-Director4 in ART.CO',
        '15.09.2013': 'Art-Director5 in ART.CO',
    }
    let work_exp_output = []
    if (working_exps) {
        for (let work_ind in working_exps) {
            work_exp_output.push(
                <li className='work_exp_elem' key={work_ind}><p>{work_ind}</p> <p>{working_exps[work_ind]}</p></li>
            )

        }
    }
    return <section className='UserAbout'>
        <li className='work_exp_title'><p>Work Experience</p></li>
        <ul className='work_exp_list'>
            {work_exp_output}
        </ul>
    </section>
}