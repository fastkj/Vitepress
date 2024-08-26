# Termux 命令大全

Termux相关的部署环境命令，仅是一些常用的命令 未完善。
收集的一些Termux安装包： [点击下载](https://pan.quark.cn/s/4f01fda72a73) 

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
- `apt-mark unhold [包名]` # 恢复包的升级、
- `pkg clean` - 清理缓存文件以释放空间。
- `pkg autoclean` - 自动清理已过时的软件包和缓存。
- `pkg autoremove` - 自动移除不再使用的依赖包。


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




### 以下是各类编程语言在Termux的常见命令

## Termux 中安装和使用 Python

- `pkg update && pkg upgrade` # 更新包管理器和已安装的包
- `pkg install python` # 安装 Python
- `python --version` # 检查 Python 版本
- `pkg install python-pip` # 安装 pip，Python 的包管理工具
- `pip install --upgrade pip` # 升级 pip 到最新版本

### 创建和运行 Python 脚本

- `mkdir my_python_project` # 创建一个新的项目目录
- `cd my_python_project` # 进入项目目录
- `nano script.py` # 使用 nano 编辑器创建并编辑 Python 脚本
- `print("Hello, Termux!")` # 在脚本中写入代码
- `CTRL + X` 然后按 `Y` 保存并退出 # 保存文件并退出编辑器
- `python script.py` # 运行 Python 脚本

### 安装常用 Python 库

- `pip install requests` # 安装 requests 库用于 HTTP 请求
- `pip install numpy` # 安装 NumPy 库用于科学计算
- `pip install pandas` # 安装 Pandas 库用于数据处理
- `pip install matplotlib` # 安装 Matplotlib 库用于绘图

### 其他常用命令

- `pip list` # 列出已安装的 Python 包
- `pip uninstall package_name` # 卸载指定的 Python 包
- `python -m venv venv` # 创建一个虚拟环境
- `source venv/bin/activate` # 激活虚拟环境
- `deactivate` # 退出虚拟环境


## Termux 中安装和使用 Ruby

- `pkg update && pkg upgrade` # 更新包管理器和已安装的包
- `pkg install ruby` # 安装 Ruby
- `ruby --version` # 检查 Ruby 版本

### 创建和运行 Ruby 脚本

- `mkdir my_ruby_project` # 创建一个新的项目目录
- `cd my_ruby_project` # 进入项目目录
- `nano script.rb` # 使用 nano 编辑器创建并编辑 Ruby 脚本
- `puts "Hello, Termux!"` # 在脚本中写入代码
- `CTRL + X` 然后按 `Y` 保存并退出 # 保存文件并退出编辑器
- `ruby script.rb` # 运行 Ruby 脚本

### 安装常用 Ruby 库

- `gem install bundler` # 安装 Bundler，用于管理 Ruby 项目的依赖
- `gem install rails` # 安装 Rails 框架（如果需要）
- `gem install sinatra` # 安装 Sinatra 框架（轻量级 web 应用框架）

### 其他常用命令

- `gem list` # 列出已安装的 Ruby gem
- `gem uninstall gem_name` # 卸载指定的 Ruby gem
- `bundle init` # 创建一个新的 Gemfile
- `bundle install` # 安装 Gemfile 中指定的所有 gem


## Termux 中安装和使用 Perl

- `pkg update && pkg upgrade` # 更新包管理器和已安装的包
- `pkg install perl` # 安装 Perl
- `perl --version` # 检查 Perl 版本

### 创建和运行 Perl 脚本

- `mkdir my_perl_project` # 创建一个新的项目目录
- `cd my_perl_project` # 进入项目目录
- `nano script.pl` # 使用 nano 编辑器创建并编辑 Perl 脚本
- `print "Hello, Termux!\n";` # 在脚本中写入代码
- `CTRL + X` 然后按 `Y` 保存并退出 # 保存文件并退出编辑器
- `perl script.pl` # 运行 Perl 脚本

### 安装常用 Perl 模块

- `cpan install Module::Name` # 使用 CPAN 安装常用 Perl 模块（替换 Module::Name 为实际模块名）
- `cpan install LWP::UserAgent` # 安装 LWP 模块，用于发送 HTTP 请求
- `cpan install DBI` # 安装 DBI 模块，用于数据库交互

### 其他常用命令

- `cpan` # 启动 CPAN shell，用于管理 Perl 模块
- `perldoc -l Module::Name` # 查看模块的安装路径
- `perl -c script.pl` # 检查 Perl 脚本的语法


## Termux 中安装和使用 Node.js

- `pkg update && pkg upgrade` # 更新包管理器和已安装的包
- `pkg install nodejs` # 安装 Node.js
- `node --version` # 检查 Node.js 版本
- `npm --version` # 检查 npm 版本

### 创建和运行 Node.js 脚本

- `mkdir my_node_project` # 创建一个新的项目目录
- `cd my_node_project` # 进入项目目录
- `nano script.js` # 使用 nano 编辑器创建并编辑 Node.js 脚本
- `console.log("Hello, Termux!");` # 在脚本中写入代码
- `CTRL + X` 然后按 `Y` 保存并退出 # 保存文件并退出编辑器
- `node script.js` # 运行 Node.js 脚本

### 安装常用 Node.js 包

- `npm init -y` # 初始化一个新的 npm 项目，并创建 package.json 文件
- `npm install express` # 安装 Express 框架（用于构建 web 应用）
- `npm install axios` # 安装 Axios 库（用于发送 HTTP 请求）
- `npm install nodemon` # 安装 Nodemon（用于自动重启 Node.js 应用）

### 其他常用命令

- `npm list` # 列出已安装的 npm 包
- `npm uninstall package_name` # 卸载指定的 npm 包
- `npm update` # 更新所有已安装的 npm 包


## Termux 中安装和使用 C/C++

- `pkg update && pkg upgrade` # 更新包管理器和已安装的包
- `pkg install clang` # 安装 Clang 编译器（支持 C 和 C++）
- `clang --version` # 检查 Clang 版本

### 创建和运行 C 程序

- `mkdir my_c_project` # 创建一个新的 C 项目目录
- `cd my_c_project` # 进入项目目录
- `nano hello.c` # 使用 nano 编辑器创建并编辑 C 源文件
- `#include <stdio.h>` # 在源文件中引入标准输入输出库
- `int main() { printf("Hello, Termux!\n"); return 0; }` # 编写 C 程序
- `CTRL + X` 然后按 `Y` 保存并退出 # 保存文件并退出编辑器
- `clang hello.c -o hello` # 编译 C 程序
- `./hello` # 运行编译后的程序

### 创建和运行 C++ 程序

- `nano hello.cpp` # 使用 nano 编辑器创建并编辑 C++ 源文件
- `#include <iostream>` # 在源文件中引入输入输出流库
- `int main() { std::cout << "Hello, Termux!" << std::endl; return 0; }` # 编写 C++ 程序
- `CTRL + X` 然后按 `Y` 保存并退出 # 保存文件并退出编辑器
- `clang++ hello.cpp -o hello_cpp` # 编译 C++ 程序
- `./hello_cpp` # 运行编译后的程序

### 其他常用命令

- `clang -o output_file source_file.c` # 编译 C 文件并指定输出文件名称
- `clang++ -o output_file source_file.cpp` # 编译 C++ 文件并指定输出文件名称
- `ls` # 列出当前目录的文件


## Termux 中安装和使用 Java

- `pkg update && pkg upgrade` # 更新包管理器和已安装的包
- `pkg install openjdk-17` # 安装 OpenJDK 17（可以根据需要选择其他版本）
- `java --version` # 检查 Java 版本
- `javac --version` # 检查 Java 编译器版本

### 创建和运行 Java 程序

- `mkdir my_java_project` # 创建一个新的 Java 项目目录
- `cd my_java_project` # 进入项目目录
- `nano HelloWorld.java` # 使用 nano 编辑器创建并编辑 Java 源文件
- `public class HelloWorld { public static void main(String[] args) { System.out.println("Hello, Termux!"); } }` # 编写 Java 程序
- `CTRL + X` 然后按 `Y` 保存并退出 # 保存文件并退出编辑器
- `javac HelloWorld.java` # 编译 Java 程序
- `java HelloWorld` # 运行编译后的程序

### 其他常用命令

- `javac -d bin src/*.java` # 编译所有 Java 源文件并将输出放入 bin 目录
- `java -cp bin HelloWorld` # 运行指定目录下的 Java 程序
- `ls` # 列出当前目录的文件



## Termux 中安装和使用 PHP

- `pkg update && pkg upgrade` # 更新包管理器和已安装的包
- `pkg install php` # 安装 PHP
- `php --version` # 检查 PHP 版本

### 创建和运行 PHP 脚本

- `mkdir my_php_project` # 创建一个新的 PHP 项目目录
- `cd my_php_project` # 进入项目目录
- `nano script.php` # 使用 nano 编辑器创建并编辑 PHP 脚本
- `<?php echo "Hello, Termux!"; ?>` # 在脚本中写入 PHP 代码
- `CTRL + X` 然后按 `Y` 保存并退出 # 保存文件并退出编辑器
- `php script.php` # 运行 PHP 脚本

### 安装常用 PHP 扩展

- `pkg install php-mbstring` # 安装 mbstring 扩展，用于处理多字节字符串
- `pkg install php-xml` # 安装 xml 扩展，用于处理 XML 数据
- `pkg install php-curl` # 安装 curl 扩展，用于发送 HTTP 请求

### 其他常用命令

- `php -l script.php` # 检查 PHP 脚本的语法
- `php -S localhost:8000` # 启动内置 PHP 服务器并监听 8000 端口
- `ls` # 列出当前目录的文件



---






