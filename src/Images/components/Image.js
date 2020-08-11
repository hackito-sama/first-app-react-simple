import React from 'react';
import styles from './Image.module.css';

export default function Image(props) {

    const { image } = props;
    return (
        <div className={styles.card}>
            <img
                src={image.source}
                alt='Imagen'
                className={styles.image}
            />
            <div className={styles.footer}>
                <img
                    src={image.author.avatar}
                    alt='Avatar'
                    className={styles.avatar}
                />
                <div>
                    {image.author.name}
                </div>
                <div>
                    {image.views}
                </div>
            </div>
        </div>
    )
}

