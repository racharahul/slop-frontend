import React from 'react'
import styles from  '../../styles/Components/Post.module.css'
import img from  "../../assets/CodeX.png"
import poster from "../../assets/poster.jpg"
import Image from "next/image";
import heart from "../../assets/heart-thin-icon.svg"
import reg from "../../assets/plus-round-line-icon.svg"
import share from "../../assets/instagram-share-icon.svg"
export const Post = () => {
    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.sender}>
                    <div className={styles.icon}>
                        <Image  src={img} />
                    </div>
                    <div className={styles.clubname}>
                        <p>Codex_GITAM <span className={styles.timestamp}> · 1d</span></p>
                    </div>
                </div>
            </div>
            <div className={styles.poster}>
                    <Image src={poster} width={"400px"} height={"400px"}/>
            </div>
            <div className={styles.stats}>
                    <p className={styles.likecount}><span className={styles.liked}>♥</span> 125</p>
                    <p className={styles.registered}>200 registrations</p>
            </div>
            <div className={styles.footer}>
                <div className={styles.buttons}>
                    <button><Image src={heart} width={"20px"} height={"20px"}/> <span className={styles.btntext}>Like</span></button>
                    <button><Image src={reg} width={"20px"} height={"20px"}/> <span className={styles.btntext}>Register</span></button>
                    <button><Image src={share} width={"20px"} height={"20px"}/> <span className={styles.btntext}>Share</span></button>
                </div>
                <div className={styles.description}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium alias at atque beatae consequuntur corporis, cumque eaque error eum fuga incidunt iure labore magni maxime modi, mollitia perferendis placeat qui quia quod tempore unde veniam? At commodi dignissimos enim eos esse exercitationem minima neque perferendis voluptas? Aliquam architecto aut autem ea eaque eligendi, est id libero maiores maxime molestiae molestias praesentium quasi repellendus repudiandae rerum sit totam! Assumenda, consectetur, dolore dolores esse et exercitationem fuga fugit illo ipsam ipsum minus perspiciatis quo sint soluta, ut veniam voluptatibus. Accusamus animi dolore eaque eum labore libero natus perspiciatis porro possimus, voluptatem?</p>
                </div>
            </div>
        </div>
    )
}