# Termux 命令大全

Termux 是一个非常强大的安卓终端模拟器，可以通过命令行进行各种操作。以下是一些常用的 Termux 命令及其注释。

## 包管理命令

- `pkg update` # 更新和升级软件包
- `pkg upgrade` # 升级所有已安装的包
- `pkg install [包名]` # 安装指定的包
- `pkg uninstall [包名]` # 卸载指定的包
- `pkg list-all` # 列出所有可用的包
- `pkg list-installed` # 列出所有已安装的包
- `pkg search [关键词]` # 搜索包含指定关键词的包
- `pkg show [包名]` # 显示指定包的详细信息

## 系统相关命令

- `termux-setup-storage` # 配置存储权限，允许 Termux 访问设备的文件系统
- `termux-battery-status` # 显示电池状态信息
- `termux-wake-lock` # 保持设备唤醒状态
- `termux-wake-unlock` # 解除设备唤醒状态
- `termux-toast "消息内容"` # 弹出一个消息提示框
- `termux-vibrate` # 使设备震动
- `termux-notification --title "标题" --content "内容"` # 发送系统通知

## 文件操作命令

- `ls` # 列出当前目录下的文件和文件夹
- `cd [目录路径]` # 切换到指定目录
- `mkdir [目录名]` # 创建新目录
- `rm [文件名或目录名]` # 删除文件或目录
- `cp [源文件路径] [目标路径]` # 复制文件
- `mv [源文件路径] [目标路径]` # 移动或重命名文件
- `cat [文件名]` # 显示文件内容
- `nano [文件名]` # 使用 nano 编辑器编辑文件

## 网络相关命令

- `curl [网址]` # 使用 curl 下载网页内容
- `wget [网址]` # 使用 wget 下载文件
- `ping [主机名或IP]` # 测试与主机的网络连接
- `ifconfig` # 显示网络接口信息
- `netstat` # 显示网络连接状态
- `ssh [用户名]@[主机名或IP]` # 通过 SSH 连接到远程服务器

## 系统信息命令

- `uname -a` # 显示系统信息
- `top` # 实时显示系统进程信息
- `df -h` # 显示磁盘空间使用情况
- `free -h` # 显示内存使用情况
- `ps aux` # 显示所有运行中的进程

## 其他常用命令

- `clear` # 清空终端屏幕
- `exit` # 退出 Termux 会话
- `history` # 显示命令历史
- `date` # 显示当前日期和时间
- `time [命令]` # 计算并显示指定命令的执行时间
- `whoami` # 显示当前用户名
- `id` # 显示当前用户的 UID 和 GID


### **包管理和更新**
- `pkg autoclean` # 清理缓存的包文件
- `pkg autoremove` # 自动移除不再需要的包
- `apt list --upgradable` # 列出可以升级的包
- `apt-mark hold [包名]` # 暂停包的升级
- `apt-mark unhold [包名]` # 恢复包的升级

### **存储与文件操作**
- `find [路径] -name [文件名]` # 在指定路径下查找文件
- `du -sh [目录]` # 显示目录大小
- `tar -czvf [压缩文件名.tar.gz] [要压缩的文件/目录]` # 创建 tar.gz 压缩包
- `tar -xzvf [压缩文件名.tar.gz]` # 解压 tar.gz 文件
- `zip [压缩文件名.zip] [要压缩的文件/目录]` # 创建 zip 压缩包
- `unzip [压缩文件名.zip]` # 解压 zip 文件

### **文本处理**
- `grep [关键词] [文件名]` # 在文件中搜索关键词
- `sed 's/原文本/新文本/g' [文件名]` # 使用 sed 进行文本替换
- `awk '{print $1}' [文件名]` # 使用 awk 处理文本并打印第一列
- `sort [文件名]` # 对文件内容进行排序
- `uniq [文件名]` # 删除文件中的重复行

### **网络操作**
- `curl -I [网址]` # 获取网页的头信息
- `curl -o [文件名] [网址]` # 下载文件并指定文件名
- `curl -L [网址] -o [文件名]` # 处理重定向并下载文件
- `scp [本地文件路径] [用户名]@[主机名]:[远程路径]` # 使用 SCP 复制文件到远程服务器
- `scp [用户名]@[主机名]:[远程文件路径] [本地路径]` # 使用 SCP 从远程服务器复制文件到本地

### **进程管理**
- `kill [进程ID]` # 终止指定的进程
- `pkill [进程名]` # 根据名称终止进程
- `killall [进程名]` # 终止所有指定名称的进程
- `bg` # 将暂停的进程置于后台继续执行
- `fg` # 将后台进程调回前台

### **系统设置**
- `termux-reload-settings` # 重新加载 Termux 设置
- `termux-change-repo` # 更改 Termux 仓库镜像
- `termux-open [文件路径]` # 使用默认应用打开文件
- `termux-open-url [网址]` # 使用默认浏览器打开网址
- `termux-clipboard-get` # 从剪贴板获取内容
- `termux-clipboard-set` # 将内容复制到剪贴板

### **编程与开发**
- `python [脚本名.py]` # 运行 Python 脚本
- `node [脚本名.js]` # 运行 Node.js 脚本
- `gcc [源文件名.c] -o [输出文件名]` # 编译 C 程序
- `g++ [源文件名.cpp] -o [输出文件名]` # 编译 C++ 程序
- `javac [源文件名.java]` # 编译 Java 程序
- `java [类名]` # 运行 Java 程序

### **安全与加密**
- `openssl enc -aes-256-cbc -salt -in [输入文件] -out [加密文件]` # 使用 AES 进行文件加密
- `openssl enc -d -aes-256-cbc -in [加密文件] -out [解密文件]` # 解密文件
- `gpg --gen-key` # 生成 GPG 密钥对
- `gpg --encrypt --recipient [接收者] [文件]` # 使用 GPG 加密文件
- `gpg --decrypt [加密文件]` # 解密 GPG 文件

### **数据传输与备份**
- `rsync -avz [源目录] [目标目录]` # 使用 rsync 进行目录同步和备份
- `adb devices` # 列出连接的 Android 设备
- `adb push [本地文件路径] [设备路径]` # 将文件从本地传输到 Android 设备
- `adb pull [设备文件路径] [本地路径]` # 从 Android 设备拉取文件到本地


---






