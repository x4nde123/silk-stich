import { motion } from "framer-motion"
import './index.scss'
import Textfield from "../../core/components/input"

const LoginView = () => {
    return (
        <main className="login-main-container">
            <motion.div
                className="motion-div"
                initial={{ position: 'absolute', top: 0, left: '-100%' }}
                animate={{ position: 'relative', top: 0, left: '-25%', rotate: 45 }}
                transition={{ type: 'spring', stiffness: 100, damping: 35 }}
            >
                <div>
                    <h1>Faça login</h1>
                    <h2>E entre para o nosso time!</h2>
                </div>
            </motion.div>
            <motion.div
                className="login-container"
                initial={{ position: 'relative', top: '-50%' }}
                animate={{ position: 'relative', top: 0 }}
                transition={{ type: 'spring', stiffness: 100, damping: 10 }}
            >
                <h1>Login</h1>

                <div className="login-content">
                    <div className="form">
                        <Textfield
                            label='E-mail'
                        />
                        <Textfield
                            label='Senha'
                        />
                        <p>Esqueceu a senha?</p>
                    </div>
                    <button>Entrar</button>
                </div>

            </motion.div>
        </main>
    )
}

export default LoginView