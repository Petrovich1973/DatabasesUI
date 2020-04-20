import React from 'react'

const KafkaSberEdition = () => {
    return (
        <div style={{maxWidth: '100%', paddingRight: '1em'}}>

            <h4>Kafka SberEdition</h4>

            <video
                autoPlay
                className="H_j_h l_e_g"
                loop
                poster="https://ak5.picdn.net/shutterstock/videos/1038624125/thumb/1.jpg"
                style={{
                    transform: 'rotate(0deg)',
                    width: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    opacity: .1,
                    zIndex: -1
                }}>
                <source
                    src="https://ak5.picdn.net/shutterstock/videos/1038624125/preview/stock-footage--d-animation-d-rendering-k-server-room-data-center-storage-hosting-concept.webm"
                    type="video/webm"/>
                <source
                    src="https://ak5.picdn.net/shutterstock/videos/1038624125/preview/stock-footage--d-animation-d-rendering-k-server-room-data-center-storage-hosting-concept.mp4"
                    type="video/mp4"/>
            </video>

            <div style={{opacity: .6}}>
                <p>Первые полеты в космос подтвердили, что человек может жить и работать в условиях невесомости. Но это
                    относится пока к сроку меньше недели. О периоде в несколько месяцев ничего определенного сказать
                    нельзя.</p>

                <p>Но как бы то ни было, при длительном пребывании человека в космосе желательно создать для него
                    привычную,
                    похожую на земную обстановку, мир, в котором есть и верх и низ. И не случайно, что идея создания
                    искусственной тяжести зародилась почти одновременно с самыми первыми трудами об освоении
                    космоса.</p>

                <p>Силу земного притяжения может заменить центробежная сила, ибо по биологическому действию инерциальные
                    и
                    гравитационные силы не отличаются друг от друга.</p>

                <p>Величина центробежной силы зависит от скорости вращения и радиуса. Исходя из этого, можно подумать,
                    что
                    идеальной формой для космического объекта было бы тело, имеющее форму тора — «бублика».</p>

                <p>Подробнее см.: https://www.nkj.ru/archive/articles/28636/ (Наука и жизнь, Мечты инженеров.
                    Архитектура в
                    космосе)</p>
            </div>
        </div>
    )
}

export default KafkaSberEdition