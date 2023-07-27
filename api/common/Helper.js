import fs from 'fs/promises'
import nodemailer from 'nodemailer'

export const joinURL = (part1, part2) => {
    if (part1.charAt(part1.length - 1) === '/') {
        part1 = part1.substr(0, part1.length - 1)
    }
    if (part2.charAt(0) === '/') {
        part2 = part2.substr(1)
    }
    return part1 + '/' + part2
}

export const clone = (obj) => JSON.parse(JSON.stringify(obj))

export const exists = async (path) => {
    try {
        await fs.access(path)
        return true
    } catch {
        return false
    }
}

export const sendMail = (transporterOptions, mailOptions) => {
    const transporter = nodemailer.createTransport(transporterOptions)

    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return reject(err)
            }
            return resolve(info)
        })
    })
}
